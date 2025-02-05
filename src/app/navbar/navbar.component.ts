import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;
  menuVisible: boolean = false;

  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.authService.role$.subscribe(role => {
      this.isAdmin = (role === '1');
      this.cdRef.detectChanges();
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  logout() {
    this.authService.logout();
  }
}