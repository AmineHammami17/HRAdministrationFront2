import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ButtonService } from 'src/app/services/shared/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar-menu-hr',
  templateUrl: './nav-bar-menu-hr.component.html',
  styleUrl: './nav-bar-menu-hr.component.scss'
})
export class NavBarMenuHrComponent implements OnInit {
  constructor(private  authService: AuthService,private router: Router,private location: Location , private buttonService : ButtonService) {
  }
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    localStorage.setItem('Toggle','1');
    this.buttonService.buttonClick$.subscribe(() => {
      this.onGlobalButtonClick();
    });


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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onGlobalButtonClick() {
    let toggle= localStorage.getItem("toggle");
    const elements = document.getElementsByClassName("box");
    const elements2 = document.getElementsByClassName("logout");

    if(toggle==="1"){  
     Array.from(elements).forEach((element) => {
       (element as HTMLElement).style.cssText = "margin-left: 0px;";
     });
     Array.from(elements2).forEach((element) => {
      (element as HTMLElement).style.cssText = "margin-left: 550px;";
    });
    
    }
     
     else{
      Array.from(elements).forEach((element) => {
        (element as HTMLElement).style.cssText = "margin-left:200px;";
      });
      Array.from(elements2).forEach((element) => {
        (element as HTMLElement).style.cssText = "margin-left:350px;";
      });
    
    }

     }

     
}
