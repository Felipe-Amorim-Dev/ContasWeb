import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarContaComponent } from './consultar-conta.component';

describe('ConsultarContaComponent', () => {
  let component: ConsultarContaComponent;
  let fixture: ComponentFixture<ConsultarContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarContaComponent]
    });
    fixture = TestBed.createComponent(ConsultarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
