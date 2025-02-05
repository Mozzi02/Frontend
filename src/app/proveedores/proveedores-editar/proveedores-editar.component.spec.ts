import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresEditarComponent } from './proveedores-editar.component';
import { FormsModule } from '@angular/forms';

describe('ProveedoresEditarComponent', () => {
  let component: ProveedoresEditarComponent;
  let fixture: ComponentFixture<ProveedoresEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { proveedor: {} },
      },
      writable: true, 
    });

    TestBed.configureTestingModule({
      declarations: [ProveedoresEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ProveedoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
