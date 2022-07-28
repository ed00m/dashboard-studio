import { Component, OnInit } from '@angular/core';
import { AbacusService, IndicadorValues, Indicadores, Profiles } from 'src/app/abacus.service';


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  title = "Indicadores Economicos"
  public indicadoresProfiles: Array<any> = []

  constructor(
    private abacus:AbacusService
  ) { }

  ngOnInit(): void {
    
    console.log("Indicadores.component");

    this.abacus.getProfiles().subscribe((IndicadoresProfiles:Profiles) => {
      // console.log(IndicadoresProfiles.data)
      this.indicadoresProfiles = IndicadoresProfiles.data
    })
  }
}
