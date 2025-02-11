import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { enviroment } from 'enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${enviroment.BACKEND_URL}/api/login`;
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token') || ''}` 
    })
    };
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());
  private roleSubject = new BehaviorSubject<string>(this.getRole());
  public role$ = this.roleSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}


  login(email: string, password: string): Observable<any> {
    const data = {email, password}
    return this.http.post<any>(this.apiUrl, data, this.httpOptions);
  }


  saveToken(token: string, rol: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
    
    this.roleSubject.next(rol);
    this.loggedInSubject.next(true); 
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.loggedInSubject.next(false); 

    this.router.navigate(['/login']);
  }

  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false
    } else {
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3){
        return false
      } else {
        return true
      }
    }
  }

  
  get loggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  getRole(): string {
    return localStorage.getItem('rol') || '';
  }
}
