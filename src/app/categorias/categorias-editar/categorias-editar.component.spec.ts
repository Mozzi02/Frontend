import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasEditarComponent } from './categorias-editar.component';
import { FormsModule } from '@angular/forms';

describe('CategoriasEditarComponent', () => {
  let component: CategoriasEditarComponent;
  let fixture: ComponentFixture<CategoriasEditarComponent>;

  beforeEach(() => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { categoria: {} },
      },
      writable: true,
    });

    TestBed.configureTestingModule({
      declarations: [CategoriasEditarComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(CategoriasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
