import { Component, Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})

// Permite que componente raiz pueda ejecutar el servicio de indicadores
@Injectable({
  providedIn: "root"
})

export class IndicadoresComponent implements OnInit {
  //
  _url = "http://34.117.109.223"
  //
  constructor (
    private http:HttpClient
  ) { 
    console.log("indicadores.component")
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

  // getAVGfromIndicador(lista:Array<String>, indicador:string) {
  //   for (let i = 0; i < lista.length; i++) {
  //     // console.log(all_values[i])
  //     if (lista[i]["key"] == indicador) {
  //       // console.log(indicador,lista)
  //       // console.log(lista)

  //       let suma = lista.reduce((a:number, b:number) => a + b, 0);
  //       console.log(indicador, "suma: ", suma)
  //       return suma / lista.length
  //     }
  //    }
  // }

}
