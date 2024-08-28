import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Announcement } from '../../models/announcement'; 
import { AnnouncementsService } from 'src/app/services/announcements/announcements.service';
import { UsersService } from 'src/app/services/users/users.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-body-employee-dashbord',
  templateUrl: './body-employee-dashbord.component.html',
  styleUrls: ['./body-employee-dashbord.component.scss']
})
export class BodyEmployeeDashbordComponent implements OnInit {
  user: any;
  announcements: Announcement[] = []; 
  profileImage: string | ArrayBuffer | null = null;
  expandedAnnouncements: boolean[] = [];
  imageUrls: { [key: number]: any } = {}; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private announcementsService: AnnouncementsService,
    private userService: UsersService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.authService.GetuserLogin().subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.loadProfileImage();
      },
      err => {
        console.error(err);
      }
    );

    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementsService.getAllAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements;
      this.sortAnnouncementsByDate();
      this.announcements.forEach(announcement => {
        this.loadImage(announcement.displayPictureFilename, announcement.id);
      });
    });
  }

  sortAnnouncementsByDate(): void {
    this.announcements.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }


  loadImage(filename: string, announcementId: number): void {
    this.announcementsService.getImage(filename).subscribe(imageBlob => {
      const objectURL = URL.createObjectURL(imageBlob);
      this.imageUrls[announcementId] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  toggleDetails(index: number): void {
    this.expandedAnnouncements[index] = !this.expandedAnnouncements[index]; 
  }

  loadProfileImage(): void {
    const filename = this.user?.displayPictureFilename;
    if (filename) {
      this.userService.getImage(filename).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.profileImage = e.target.result;
          };
          reader.readAsDataURL(blob);
        },
        err => {
          console.error('Error loading profile image:', err);
        }
      );
    } else {
      console.log('No profile image filename available');
    }
  }
}
