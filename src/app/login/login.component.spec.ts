import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

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

describe('LoginComponent (Integracion)', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [LoginComponent],
      providers: [AuthService]
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  })

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya llamadas HTTP pendientes
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería realizar una petición HTTP al hacer login con credenciales válidas', () => {
    component.email = 'test@gmail.com';
    component.password = '123456';
    component.onLogin();

    // Simulamos la petición HTTP
    const req = httpMock.expectOne('http://localhost:3000/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email: 'test@gmail.com', password: '123456' });

    // Respondemos con un token falso
    req.flush({ token: 'fake-token', usuario: { rol: { idRol: 1 } } });

    expect(component.mostrarMensaje).toBeFalse();
  });

  it('debería manejar un error 401 si las credenciales son incorrectas', () => {
    component.email = 'test@gmail.com';
    component.password = 'wrongpassword';
    component.onLogin();

    const req = httpMock.expectOne('http://localhost:3000/api/login');
    req.flush({ message: 'Credenciales incorrectas' }, { status: 401, statusText: 'Unauthorized' });

    fixture.detectChanges();

    expect(component.mostrarMensaje).toBeTrue();
    expect(component.errorMessage).toBe('Credenciales incorrectas. Intenta nuevamente.');
  });
})
