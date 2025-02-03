import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LineaService } from './linea.service';

describe('LineaService', () => {
  let service: LineaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LineaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
