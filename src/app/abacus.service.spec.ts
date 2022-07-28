import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacusService } from './abacus.service';

describe('AbacusService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AbacusService]
  }));

   it('should be created', () => {
    const service: AbacusService = TestBed.inject(AbacusService);
    expect(service).toBeTruthy();
   });

   it('should have getProfiles function', () => {
    const service: AbacusService = TestBed.inject(AbacusService);
    expect(service.getProfiles()).toBeTruthy();
   });

});
