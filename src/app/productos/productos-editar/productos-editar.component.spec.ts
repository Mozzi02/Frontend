import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductosEditarComponent } from './productos-editar.component';
import { FormsModule } from '@angular/forms';

describe('ProductosEditarComponent', () => {
  let component: ProductosEditarComponent;
  let fixture: ComponentFixture<ProductosEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { producto: {} },
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
      declarations: [ProductosEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ProductosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
