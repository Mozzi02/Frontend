import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosEditarComponent } from './empleados-editar.component';
import { FormsModule } from '@angular/forms';

describe('EmpleadosEditarComponent', () => {
  let component: EmpleadosEditarComponent;
  let fixture: ComponentFixture<EmpleadosEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { empleado: {} },
      },
      writable: true,
    });

    Object.defineProperty(window, 'history', {
      
      value: {
        state: { descripcion: {} },
      },
      writable: true,
    });

    TestBed.configureTestingModule({
      declarations: [EmpleadosEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(EmpleadosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
