import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LineadeventaEditarComponent } from './lineadeventa-editar.component';
import { FormsModule } from '@angular/forms';

describe('LineadeventaEditarComponent', () => {
  let component: LineadeventaEditarComponent;
  let fixture: ComponentFixture<LineadeventaEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { linea: {} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    Object.defineProperty(window, 'history', {
      value: {
        state: { descripcion: {} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    TestBed.configureTestingModule({
      declarations: [LineadeventaEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(LineadeventaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
