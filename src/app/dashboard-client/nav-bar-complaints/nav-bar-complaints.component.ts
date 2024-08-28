import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar-complaints',
  templateUrl: './nav-bar-complaints.component.html',
  styleUrl: './nav-bar-complaints.component.scss'
})
export class NavBarComplaintsComponent {
  constructor(private  authService: AuthService,private router: Router,private location: Location) {
  }
  activeButton: string = '';
  setActive(button: string): void {
    this.activeButton = button;
  }
  goBack(): void {
    this.location.back();
  }
  logout() {
    sessionStorage.clear();
   this.router.navigate(['/login']);
  }


}
