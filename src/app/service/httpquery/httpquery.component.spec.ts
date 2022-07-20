import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpqueryComponent } from './httpquery.component';


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