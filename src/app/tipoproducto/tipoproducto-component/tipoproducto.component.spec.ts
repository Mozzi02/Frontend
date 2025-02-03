import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TipoproductoComponent } from './tipoproducto.component';
import { FormsModule } from '@angular/forms';

describe('TipoproductoComponent', () => {
  let component: TipoproductoComponent;
  let fixture: ComponentFixture<TipoproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoproductoComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(TipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
