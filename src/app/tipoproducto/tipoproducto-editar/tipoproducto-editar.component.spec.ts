import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoproductoEditarComponent } from './tipoproducto-editar.component';

describe('TipoproductoEditarComponent', () => {
  let component: TipoproductoEditarComponent;
  let fixture: ComponentFixture<TipoproductoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoproductoEditarComponent]
    });
    fixture = TestBed.createComponent(TipoproductoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
