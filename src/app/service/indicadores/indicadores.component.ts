import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})

// Permite que componente raiz pueda ejecutar el servicio de indicadores
// @Injectable({
//   providedIn: "root"
// })

export class IndicadoresComponent implements OnInit {
  //
  _url = "http://34.117.109.223";
  public indicadoresProfiles: Array<any> = []

  //
  constructor (
    private http:HttpClient,
    
  ) { 
    console.log("indicadores.component")
    this.getProfiles().subscribe((IndicadoresProfiles:Object) => {
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

  ngOnInit(): void {
  }

  getIndicadores() {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    // console.log(headers)
    return this.http.get(this._url + "/abacus/last", { headers: headers})
  }

  getValues(indicador:string) {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    // console.log(headers)
    return this.http.get(this._url + "/abacus/values/" + indicador, { headers: headers})
  }

  getProfiles() {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    return this.http.get(this._url + "/abacus/profiles", { headers: headers})
  }

}
