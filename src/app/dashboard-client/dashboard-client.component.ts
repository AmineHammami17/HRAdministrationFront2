import { data } from './../fack-db/series-data';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import {jwtDecode, JwtPayload} from 'jwt-decode';
@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.scss'
})
export class DashboardClientComponent implements OnInit{
  constructor(private  authService: AuthService,private router: Router,private location: Location) {
  }
  user: any;

  ngOnInit(): void {
    this.authService.GetuserLogin().subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.error(err); // Affiche l'erreur dans la console
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  logout() {
    sessionStorage.removeItem('token')
   this.router.navigate(['/login']);
  }
  }

