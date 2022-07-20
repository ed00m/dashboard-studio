import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';

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
