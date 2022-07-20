import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';


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

export type Values = {
  data: {
      key: string,
      values: number[]
    }
}


@Component({
  selector: 'app-httpquery',
  templateUrl: './httpquery.component.html',
  styleUrls: ['./httpquery.component.css']
})

// Permite que componente raiz pueda ejecutar el servicio de indicadores
@Injectable({
  providedIn: "root"
})

export class HttpqueryComponent implements OnInit {
  // TODO: Change from component to service
  
  private _url = environment.API_URL;

  //
  constructor (
    private http:HttpClient,
  ) { 
    console.log("httpquery.component")
  }

  ngOnInit(): void {
  }

  getIndicadores() {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    // console.log(headers)
    return this.http.get<Indicadores>(this._url + "/abacus/last", { headers: headers})
  }

  getValues(indicador:string) {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    // console.log(headers)
    return this.http.get<Values>(this._url + "/abacus/values/" + indicador, { headers: headers})
  }

  getProfiles() {
    let headers = new HttpHeaders()
      // .set('Type-content', 'application/json')
      // .set('Host', 'www.bice.cl')
    return this.http.get<Profiles>(this._url + "/abacus/profiles", { headers: headers})
  }
}
