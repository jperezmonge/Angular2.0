import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEjercicioComponent } from './lista-ejercicio.component';

describe('ListaEjercicioComponent', () => {
  let component: ListaEjercicioComponent;
  let fixture: ComponentFixture<ListaEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
