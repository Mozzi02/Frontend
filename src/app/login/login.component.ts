import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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

  // Método para iniciar sesión
  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        // Guarda el token y redirige al dashboard o alguna ruta protegida
        this.authService.saveToken(response.token, response.usuario.rol.idRol);
        this.router.navigate(['/']); // Cambia esto por la ruta que necesites
      },
      error: (error) => {
        // Muestra un mensaje de error si la autenticación falla
        this.mostrarMensaje = true;
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        setTimeout(() => {
          this.mostrarMensaje = false;
        }, 3000);
      }
    });
  }
}

