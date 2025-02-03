import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles.component';
import { FormsModule } from '@angular/forms';

describe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesComponent],
      imports: [HttpClientModule, FormsModule]
    });
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
