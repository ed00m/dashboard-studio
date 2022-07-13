import { Component, Type } from '@angular/core';
import { IndicadoresComponent } from './service/indicadores/indicadores.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-studio';
  public indicadoresProfiles: Array<any> = [];
  // private indicadorValues = {};
  // public valuesObject:Object = {};

  constructor(
    private IndicadoresComponent:IndicadoresComponent
  ) {
    this.IndicadoresComponent.getProfiles().subscribe((IndicadoresProfiles:Object) => {
      // console.log(IndicadoresProfiles)

      const indicadoresProfilesArray: any[] = [];

      const IndicadoresProfilesMap: Map<string, Object> = new Map(Object.entries(IndicadoresProfiles));
      // console.log(IndicadoresProfilesMap)
      IndicadoresProfilesMap.forEach((value, key) => {
        // cobre|dolar|euro|ipc|ivp|oro|plata|uf|utm|yen

        if (key == "data") {
          // console.log(value)
          const ProfilesDataMap: Map<string, Object> = new Map(Object.entries(value));
          ProfilesDataMap.forEach((profileData, key2) => {
            // console.log(indicadoresProfilesArray.length)
            // console.log(profileData)
            if (key2 != null || key2 != "") {
              indicadoresProfilesArray.push(profileData);
            }
          })
          // console.log(indicadoresProfilesArray.length)
        }
      });
      // console.log(indicadoresProfilesArray)
      this.indicadoresProfiles = indicadoresProfilesArray
      // 
      // console.log(this.indicadoresProfiles)

    })
  }
}

