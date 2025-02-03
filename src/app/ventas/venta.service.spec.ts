import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { VentaService } from './venta.service';

describe('VentaService', () => {
  let service: VentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
