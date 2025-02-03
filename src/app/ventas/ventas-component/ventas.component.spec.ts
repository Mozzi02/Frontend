import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VentasComponent } from './ventas.component';
import { FormsModule } from '@angular/forms';

describe('VentasComponent', () => {
  let component: VentasComponent;
  let fixture: ComponentFixture<VentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
