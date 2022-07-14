import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicadoresComponent } from './service/indicadores/indicadores.component';
import { AbacusComponent } from './service/abacus/abacus.component';
import { DashboardComponent } from './service/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadoresComponent,
    AbacusComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
