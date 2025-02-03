import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TipoproductoEditarComponent } from './tipoproducto-editar.component';
import { FormsModule } from '@angular/forms';

describe('TipoproductoEditarComponent', () => {
  let component: TipoproductoEditarComponent;
  let fixture: ComponentFixture<TipoproductoEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { tipo: {} },
      },
      writable: true, // Establecer writable en true para permitir el cambio
    });

    TestBed.configureTestingModule({
      declarations: [TipoproductoEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(TipoproductoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
