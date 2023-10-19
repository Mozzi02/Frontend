import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresBusquedaComponent } from './proveedores-busqueda.component';

describe('ProveedoresBusquedaComponent', () => {
  let component: ProveedoresBusquedaComponent;
  let fixture: ComponentFixture<ProveedoresBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresBusquedaComponent]
    });
    fixture = TestBed.createComponent(ProveedoresBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
