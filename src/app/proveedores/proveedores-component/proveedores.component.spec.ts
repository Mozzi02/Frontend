import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresComponent } from './proveedores.component';
import { FormsModule } from '@angular/forms';

describe('ProveedoresComponent', () => {
  let component: ProveedoresComponent;
  let fixture: ComponentFixture<ProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
