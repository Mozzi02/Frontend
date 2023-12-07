import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineadeventaEditarComponent } from './lineadeventa-editar.component';

describe('LineadeventaEditarComponent', () => {
  let component: LineadeventaEditarComponent;
  let fixture: ComponentFixture<LineadeventaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineadeventaEditarComponent]
    });
    fixture = TestBed.createComponent(LineadeventaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
