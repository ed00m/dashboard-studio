import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export type Profiles = {
  data: {
    date: number,
    key: string,
    name: string,
    profile: {
        'avg_comp-ute': number,
        'avg_stat-dmn': number,
        'avg_stat-fmn': number,
        len: number,
        sum: number
    },
    unit: string,
    value: number,
    values: number[]
  }[]
}

export type Indicadores = {
  data: {
    [key: string]: {
      values: number[]
    }
  }
}

export type IndicadorValues = {
  data: {
      key: string,
      values: number[]
    }
}

@Injectable({
  providedIn: 'root'
})
export class AbacusService {

  private _url = environment.API_URL;

  constructor(
    private httpClient:HttpClient,
  ) { 
    console.log("Abacus.component");
  }

  getIndicadores() {
    let headers = new HttpHeaders()
    return this.httpClient.get<Indicadores>(this._url + "/abacus/last", { headers: headers})
  }

  getIndicadorValues(indicador:string) {
    let headers = new HttpHeaders()
    return this.httpClient.get<IndicadorValues>(this._url + "/abacus/values/" + indicador, { headers: headers})
  }

  getProfiles() {
    let headers = new HttpHeaders()
    return this.httpClient.get<Profiles>(this._url + "/abacus/profiles", { headers: headers})
  }
}
