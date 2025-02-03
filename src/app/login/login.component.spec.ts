import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    authServiceMock = {
      login: jasmine.createSpy('login').and.returnValue(of({ token: 'fake-token', usuario: { rol: { idRol: 1 } } })),
      saveToken: jasmine.createSpy('saveToken')
    }

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

  })


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a AuthService.login() cuando se ejecute onLogin()', () => {
    component.email = 'test@gmail.com';
    component.password = '123456';
    component.onLogin();

    expect(authServiceMock.login).toHaveBeenCalledWith('test@gmail.com', '123456');
  });

  it('debería redirigir al usuario después de un inicio de sesión exitoso', () => {
    component.onLogin();

    expect(authServiceMock.saveToken).toHaveBeenCalledWith('fake-token', 1);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  });

  it('debería mostrar un mensaje de error cuando las credenciales sean incorrectas', () => {
    authServiceMock.login.and.returnValue(throwError(() => new Error('Credenciales incorrectas')));
    
    component.onLogin();

    expect(component.mostrarMensaje).toBeTrue();
    expect(component.errorMessage).toBe('Credenciales incorrectas. Intenta nuevamente.');
  });
});
