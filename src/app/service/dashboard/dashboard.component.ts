import { Component, OnInit, Injectable } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { HttpqueryComponent } from '../httpquery/httpquery.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  //
  title = 'Dashboard Main'
  _url = "https://the-economist-r5f3mpgeka-tl.a.run.app";

  public indicadoresArray: Array<any> = []

  // chartLabels: Array<any> = []
  // chartDatasets: Array<any> = []

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
  ) {
    console.log("dashboard.component")

    const [chartLabels, chartDatasets] = this.main()

    this.chartLabels = chartLabels
    this.chartDatasets = chartDatasets

    console.log('inside chartLabels', this.chartLabels)
    console.log('inside chartDatasets', this.chartDatasets)

    this.salesData = {
      labels: this.chartLabels,
      datasets: this.chartDatasets,
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: this.chartTitle,
        },
      },
    };
    
    console.log('chartOptions', this.chartOptions)
  }

  ngOnInit(): void {
  }

  main(): Array<any> {
    // TODO: keys from Object and Map/Reduce attributes
    const indicadoresRespArray: any[] = [];
    const chartLabelsTmp: any[] = [];
    const chartDatasetsTmp: any[] = [];
    const indicadoresValuesData: any[] = [];
    // Obtener Indicadores desde API
    this.HttpqueryComponent.getIndicadores().subscribe((indicadoresResp: Object) => {
      //
      // console.log(indicadoresResp)
      // --
      const indicadoresRespMap: Map<string, Object> = new Map(Object.entries(indicadoresResp));
      // console.log('indicadoresRespMap', indicadoresRespMap)

      indicadoresRespMap.forEach((indicadoresRespMapvalue, indicadoresRespMapkey) => {
        // OK | backend_time | cache | data | time
        //
        // console.log(indicadoresRespMapkey)
        if (indicadoresRespMapkey == "data") {
          const indicadoresRespdataMap: Map<string, Object> = new Map(Object.entries(indicadoresRespMapvalue));
          // console.log('indicadoresRespdataMap', indicadoresRespdataMap)
          indicadoresRespdataMap.forEach((indicadoresRespdataMapvalue, indicadoresRespdataMapkey) => {
            // console.log(indicadoresRespdataMapkey)
            this.HttpqueryComponent.getValues(indicadoresRespdataMapkey).subscribe((indicadoresValuesResp: Object) => {
              const indicadoresValuesRespMap: Map<string, Object> = new Map(Object.entries(indicadoresValuesResp));
              // console.log('indicadoresValuesRespMap', indicadoresValuesRespMap)
              indicadoresValuesRespMap.forEach((indicadoresValuesRespMapvalue, indicadoresValuesRespMapkey) => {
                // console.log(indicadoresValuesRespMapkey)
                if (indicadoresValuesRespMapkey == "data") {
                  // console.log(indicadoresValuesRespMapvalue)
                  const indicadoresValuesRespValuesMap: Map<string, Object> = new Map(Object.entries(indicadoresValuesRespMapvalue));
                  indicadoresValuesRespValuesMap.forEach((indicadoresValuesRespMapvalue, indicadoresValuesRespMapkey) => {
                    // console.log(indicadoresValuesRespMapkey)
                    if (indicadoresValuesRespMapkey == "values") {
                      // console.log(indicadoresValuesRespMapvalue)
                      let IndicadorDataSet: Object = {
                        label: indicadoresRespdataMapkey,
                        data: indicadoresValuesRespMapvalue,
                        tension: 0.5
                      }
                      // console.log(IndicadorDataSet)
                      chartLabelsTmp.push(indicadoresRespdataMapkey);
                      chartDatasetsTmp.push(IndicadorDataSet);
                    }
                  })
                }
              })
            })
          })
        }
      })
    })
    return [chartLabelsTmp, chartDatasetsTmp];
  }
}
