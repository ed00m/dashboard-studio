import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpqueryComponent } from '../httpquery/httpquery.component';

import { DashboardComponent } from './dashboard.component';


describe('HttpqueryComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [HttpqueryComponent]
  }));

   it('should be created', () => {
    const service: HttpqueryComponent = TestBed.inject(HttpqueryComponent);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: HttpqueryComponent = TestBed.inject(HttpqueryComponent);
    expect(service.getIndicadores()).toBeTruthy();
   });

});