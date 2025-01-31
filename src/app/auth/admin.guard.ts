import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getRole() === '1') {
      return true;
    } else {
      this.router.navigate(['/']); // Redirige a la página principal si no es admin
      return false;
    }
  }
}
