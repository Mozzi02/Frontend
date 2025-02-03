import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pedidos.component';
import { FormsModule } from '@angular/forms';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
