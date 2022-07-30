import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { AbacusService, IndicadorValues, Indicadores } from 'src/app/abacus.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard Charts'
  //
  cardTitle = "Evolucion de indicadores economicos"
  chartTitle = "Datos Anuales"
  //
  public chartLabels: Array<any> = []
  public chartDatasets: Array<any> = []
  public salesData: ChartData<'line'> = {
    labels: this.chartLabels,
    datasets: this.chartDatasets,
  }
  public chartOptions: ChartOptions = {}
  
  //
  constructor(
    private abacus:AbacusService
  ) { }

  ngOnInit(): void {

    console.log("Dashboard.component")

    this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: this.chartTitle,
        },
      },
    };

    this.vpload()

    // console.log('chartOptions', this.chartOptions)
  }

  vpload() {
    
    // Obtener Indicadores desde API

    const indicadoresValuesPromises: Promise<IndicadorValues>[] = []

    this.abacus.getIndicadores().subscribe((indicadoresResponse: Indicadores) => {
      //
      // console.log(indicadoresResponse)
      // console.log(indicadoresResponse.data['cobre'])
      const indicadores = Object.keys(indicadoresResponse.data)
        
      this.chartLabels = indicadores

      indicadores.forEach((indicador:string) => {
        // console.log(key)
        indicadoresValuesPromises.push(new Promise((resolve) => {
          this.abacus.getIndicadorValues(indicador).subscribe((indicadorValuesResponse: IndicadorValues) => {
            resolve(indicadorValuesResponse)
          })
        }))
      })

      Promise.all(indicadoresValuesPromises).then((indicadoresValuesResponse: IndicadorValues[]) => {
      
        indicadoresValuesResponse.forEach((values: IndicadorValues) => {
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

        // console.log('inside chartLabels', this.chartLabels)
        // console.log('inside chartDatasets', this.chartDatasets)
      })
    })
  }

}
