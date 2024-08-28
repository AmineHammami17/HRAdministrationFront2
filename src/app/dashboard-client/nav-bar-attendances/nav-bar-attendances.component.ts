import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar-attendances',
  templateUrl: './nav-bar-attendances.component.html',
  styleUrl: './nav-bar-attendances.component.scss'
})
export class NavBarAttendancesComponent {
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


