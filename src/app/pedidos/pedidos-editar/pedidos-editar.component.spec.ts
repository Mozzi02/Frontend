import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEditarComponent } from './pedidos-editar.component';

describe('PedidosEditarComponent', () => {
  let component: PedidosEditarComponent;
  let fixture: ComponentFixture<PedidosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosEditarComponent]
    });
    fixture = TestBed.createComponent(PedidosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
