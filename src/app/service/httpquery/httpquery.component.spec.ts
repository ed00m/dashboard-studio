import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpqueryComponent } from './httpquery.component';

describe('HttpqueryComponent', () => {
  let component: HttpqueryComponent;
  let fixture: ComponentFixture<HttpqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
