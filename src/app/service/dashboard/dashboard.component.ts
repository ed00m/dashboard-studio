import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //
  title = 'Dashboard Main'
  
  //
  cardTitle = "Presencia de indicadores economicos"
  //
  chartTitle = "Datos Anuales"
  chartLabels = ['2018', '2019', '2020', '2021', '2022'];
  chartDatasets = [
    { label: 'cobre', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
    { label: 'dolar', data: [200, 100, 400, 50, 90], tension: 0.5 },
    { label: 'UF', data: [500, 400, 350, 450, 650], tension: 0.5 },
    { label: 'oro', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
  ]
  
  salesData: ChartData<'line'> = {
    labels: this.chartLabels,
    datasets: this.chartDatasets,
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: this.chartTitle,
      },
    },
  };
  //
  constructor() { 
    console.log("dashboard.component")
  }

  ngOnInit(): void {
  }
}
