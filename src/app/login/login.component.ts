import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  errorMessage: string = '';
  mostrarMensaje: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token, response.usuario.rol.idRol);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        })
      },
      error: (error) => {
        this.mostrarMensaje = true;
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
      }
    });
  }
}

