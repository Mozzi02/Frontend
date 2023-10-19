import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBusquedaComponent } from './productos-busqueda.component';

describe('ProductosBusquedaComponent', () => {
  let component: ProductosBusquedaComponent;
  let fixture: ComponentFixture<ProductosBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosBusquedaComponent]
    });
    fixture = TestBed.createComponent(ProductosBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
