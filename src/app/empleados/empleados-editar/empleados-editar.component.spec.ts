import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEditarComponent } from './empleados-editar.component';

describe('EmpleadosEditarComponent', () => {
  let component: EmpleadosEditarComponent;
  let fixture: ComponentFixture<EmpleadosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosEditarComponent]
    });
    fixture = TestBed.createComponent(EmpleadosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
