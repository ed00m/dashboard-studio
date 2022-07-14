import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {
  title = 'Dashboard Abacus';


  constructor(
  ) { 
    console.log("abacus.component");
  }

  ngOnInit(): void {
  }

}
