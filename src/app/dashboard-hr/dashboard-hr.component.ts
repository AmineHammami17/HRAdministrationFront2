import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import {jwtDecode, JwtPayload} from 'jwt-decode';
import { Subscription } from 'rxjs';
import { ButtonService } from '../services/shared/service.service';
@Component({
  selector: 'app-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrl: './dashboard-hr.component.scss'
})
export class DashboardHrComponent implements OnInit {
  constructor(private  authService: AuthService,private router: Router,private location: Location, private buttonService : ButtonService) {
  }
  user: any;
  activeButton: string = '';
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    localStorage.setItem('Toggle','1');
    this.buttonService.buttonClick$.subscribe(() => {
      this.onGlobalButtonClick();
    });
    this.authService.GetuserLogin().subscribe(
      data => {
        console.log(data);
        this.user = data;
      },
      err => {
        console.error(err);
      }
    );
  }
  setActive(button: string): void {
    this.activeButton = button;
  }

  goBack(): void {
    this.location.back();
  }
  logout() {
    sessionStorage.removeItem('token')
   this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onGlobalButtonClick() {
    console.log('Le bouton a été cliqué!');
    let toggle= localStorage.getItem("toggle");
    const elements = document.getElementsByClassName("attendance");
    if(toggle==="1"){   
     Array.from(elements).forEach((element) => {
       (element as HTMLElement).style.cssText = "width:900px;";
     });}
     else{
      Array.from(elements).forEach((element) => {
        (element as HTMLElement).style.cssText = "width: 700px;";
      });}

     }
  }

