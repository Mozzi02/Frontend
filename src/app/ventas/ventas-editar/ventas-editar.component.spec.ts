import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEditarComponent } from './ventas-editar.component';

describe('VentasEditarComponent', () => {
  let component: VentasEditarComponent;
  let fixture: ComponentFixture<VentasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasEditarComponent]
    });
    fixture = TestBed.createComponent(VentasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
