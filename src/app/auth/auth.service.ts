import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login'; // URL de tu API de login
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}` // Agrega el token
    })
    };
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) {}

  // Realiza el login
  login(email: string, password: string): Observable<any> {
    const data = {email, password}
    return this.http.post<any>(this.apiUrl, data, this.httpOptions);
  }

  // Guarda el token JWT en localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedInSubject.next(true); // Notifica que el usuario está logueado
  }

  // Elimina el token JWT y cierra la sesión
  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false); // Notifica que el usuario está deslogueado
  }

  // Verifica si el usuario está autenticado (es decir, si existe el token)
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Devuelve el estado de autenticación como un Observable
  get loggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
