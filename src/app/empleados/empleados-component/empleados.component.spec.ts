import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadosComponent } from './empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('EmpleadosComponent', () => {
  let component: EmpleadosComponent;
  let fixture: ComponentFixture<EmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(EmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
