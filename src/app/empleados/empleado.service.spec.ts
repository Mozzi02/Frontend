import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoService } from './empleado.service';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(EmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
