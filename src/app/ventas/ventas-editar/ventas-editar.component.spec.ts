import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VentasEditarComponent } from './ventas-editar.component';
import { FormsModule } from '@angular/forms';

describe('VentasEditarComponent', () => {
  let component: VentasEditarComponent;
  let fixture: ComponentFixture<VentasEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { venta: {} },
      },
      writable: true, 
    });

    Object.defineProperty(window, 'history', {
      value: {
        state: { apellido: {} },
      },
      writable: true, 
    });

    TestBed.configureTestingModule({
      declarations: [VentasEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(VentasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
