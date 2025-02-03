import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TipoService } from './tipo.service';

describe('TipoService', () => {
  let service: TipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
