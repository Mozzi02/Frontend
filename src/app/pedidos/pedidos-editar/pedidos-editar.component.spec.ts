import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PedidosEditarComponent } from './pedidos-editar.component';
import { FormsModule } from '@angular/forms';

describe('PedidosEditarComponent', () => {
  let component: PedidosEditarComponent;
  let fixture: ComponentFixture<PedidosEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { pedido: {estado: ''} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    Object.defineProperty(window, 'history', {
      value: {
        state: { apellido: {} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    TestBed.configureTestingModule({
      declarations: [PedidosEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(PedidosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
