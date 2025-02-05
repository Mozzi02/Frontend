import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClientesEditarComponent } from './clientes-editar.component';
import { FormsModule } from '@angular/forms';

describe('ClientesEditarComponent', () => {
  let component: ClientesEditarComponent;
  let fixture: ComponentFixture<ClientesEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { cliente: {} },
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
      declarations: [ClientesEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ClientesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
