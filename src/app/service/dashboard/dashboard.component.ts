import { Component, OnInit, Injectable } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { environment } from '@environments/environment';
import { HttpqueryComponent, Indicadores, Profiles, Values } from '../httpquery/httpquery.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  //
  title = 'Dashboard Main'
  private _url = environment.API_URL;

  public indicadoresArray: Array<any> = []

  //
  cardTitle = "Evolucion de indicadores economicos"
  //
  chartTitle = "Datos Anuales"

  //
  public chartLabels: Array<any> = []
  //
  public chartDatasets: Array<any> = []

  public salesData: ChartData<'line'> = {
    labels: this.chartLabels,
    datasets: this.chartDatasets,
  }

  public chartOptions: ChartOptions = {}

  //
  //
  constructor(
    private HttpqueryComponent: HttpqueryComponent
  ) {}

  ngOnInit(): void {
    console.log("dashboard.component")

    this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: this.chartTitle,
        },
      },
    };

    this.vpload()

    console.log('chartOptions', this.chartOptions)
  }

  vpload() {
    // Obtener Indicadores desde API

    const indicadoresValuesPromises: Promise<Values>[] = []

    this.HttpqueryComponent.getIndicadores().subscribe((indicadoresResp: Indicadores) => {
      //
      // console.log(indicadoresResp)
      // console.log(indicadoresResp.data['cobre'])
      const indicadores = Object.keys(indicadoresResp.data)
        
      this.chartLabels = indicadores

      indicadores.forEach((indicador:string) => {
        // console.log(key)
        indicadoresValuesPromises.push(new Promise((resolve) => {
          this.HttpqueryComponent.getValues(indicador).subscribe((indicadorValuesResp: Values) => {
            resolve(indicadorValuesResp)
          })
        }))
      })

      Promise.all(indicadoresValuesPromises).then((indicadoresValuesResponses: Values[]) => {
      
        indicadoresValuesResponses.forEach((values: Values) => {
          this.chartDatasets.push({
            label: values.data.key,
            data: values.data.values,
            tension: 0.5
          })
        })

        this.salesData = {
          labels: this.chartLabels,
          datasets: this.chartDatasets,
        };

        console.log('inside chartLabels', this.chartLabels)
        console.log('inside chartDatasets', this.chartDatasets)
      })
    })
  }
}
