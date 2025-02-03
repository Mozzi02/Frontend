import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LineadeventaComponent } from './lineadeventa.component';
import { FormsModule } from '@angular/forms';

describe('LineadeventaComponent', () => {
  let component: LineadeventaComponent;
  let fixture: ComponentFixture<LineadeventaComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { venta: {} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    TestBed.configureTestingModule({
      declarations: [LineadeventaComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(LineadeventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
