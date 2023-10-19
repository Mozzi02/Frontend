import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineadeventaComponent } from './lineadeventa.component';

describe('LineadeventaComponent', () => {
  let component: LineadeventaComponent;
  let fixture: ComponentFixture<LineadeventaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineadeventaComponent]
    });
    fixture = TestBed.createComponent(LineadeventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
