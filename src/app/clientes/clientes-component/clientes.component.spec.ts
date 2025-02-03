import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes.component';
import { FormsModule } from '@angular/forms';

describe('ClientesComponent', () => {
  let component: ClientesComponent;
  let fixture: ComponentFixture<ClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(ClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
