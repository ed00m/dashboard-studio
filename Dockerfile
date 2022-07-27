ARG BUILD_CONFIG=development

### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/app/dashboard-studio/
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ls -l /usr/src/app
RUN npm run build --configuration=$BUILD_CONFIG
RUN ls -l /usr/src/app/dashboard-studio

# The standard nginx container just runs nginx. The configuration file added
# below will be used by nginx.
FROM nginx

# Copy the nginx configuration file. This sets up the behavior of nginx. Most
# important, it ensures that nginx listens on port 8080. Google App Engine expects
# the runtime to respond to HTTP requests at port 8080.
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# create log dir configured in nginx.conf
RUN mkdir -p /var/log/app_engine

# Create a simple file to handle health checks. Health checking can be disabled
# in app.yaml, but is highly recommended. Google App Engine will send an HTTP
# request to /_ah/health and any 2xx or 404 response is considered healthy.
# Because 404 responses are considered healthy, this could actually be left
# out as nginx will return 404 if the file isn't found. However, it is better
# to be explicit.
RUN mkdir -p /usr/share/nginx/www/_ah && \
    echo "healthy" > /usr/share/nginx/www/_ah/health

# Finally, all static assets.
# RUN mkdir -p /usr/share/nginx/www/
COPY --from=build /usr/src/app/dashboard-studio/dist/ /usr/share/nginx/www/
RUN ls -l /usr/share/nginx/www/
RUN ls -l /usr/share/nginx/www/dashboard-studio/
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]