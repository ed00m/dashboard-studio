import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresComponent } from './indicadores.component';

describe('IndicadoresComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [IndicadoresComponent]
  }));

   it('should be created', () => {
    const service: IndicadoresComponent = TestBed.inject(IndicadoresComponent);
    expect(service).toBeTruthy();
   });

  //  it('should have getData function', () => {
  //   const service: IndicadoresComponent = TestBed.inject(IndicadoresComponent);
  //   expect(service.vpload()).toBeTruthy();
  //  });

});
