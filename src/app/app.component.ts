import { Component, Type } from '@angular/core';
import { IndicadoresComponent } from './service/indicadores/indicadores.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-studio';
  //public indicadoresProfiles: Array<any> = [];
  // private indicadorValues = {};
  // public valuesObject:Object = {};

  constructor() {}
}

