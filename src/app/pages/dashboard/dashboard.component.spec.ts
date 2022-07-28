import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [DashboardComponent]
  }));

   it('should be created', () => {
    const service: DashboardComponent = TestBed.inject(DashboardComponent);
    expect(service).toBeTruthy();
   });

  //  it('should have getData function', () => {
  //   const service: DashboardComponent = TestBed.inject(DashboardComponent);
  //   expect(service.vpload()).toBeTruthy();
  //  });

});