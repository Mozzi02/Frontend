import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './categorias.component';
import { FormsModule } from '@angular/forms';

describe('CategoriasComponent', () => {
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
