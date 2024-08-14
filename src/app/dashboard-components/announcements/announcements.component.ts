// announcement.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from 'src/app/services/announcements/announcements.service';
import { Announcement } from 'src/app/models/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementComponent implements OnInit {
  showAddAnnouncement = false;
  showUpdateAnnouncement = false;
  announcementIdToUpdate: number | undefined;
  announcements: Announcement[] = [];
  imageUrls: { [id: number]: string } = {};

  constructor(private announcementsService: AnnouncementsService) { }

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementsService.getAllAnnouncements().subscribe(
      (data) => {
        this.announcements = data;
        this.loadImages();
      },
      (error) => {
        console.error('Error fetching announcements', error);
      }
    );
  }

  loadImages(): void {
    this.announcements.forEach(announcement => {
      if (announcement.displayPicture) {
        this.announcementsService.getAnnouncementImage(announcement.displayPicture).subscribe(
          (blob: Blob) => {
            const url = URL.createObjectURL(blob);
            this.imageUrls[announcement.id] = url;
          },
          (error) => {
            console.error('Error fetching announcement image', error);
          }
        );
      }
    });
  }

  deleteAnnouncement(id?: number): void {
    if (id !== undefined) {
      this.announcementsService.deleteAnnouncement(id).subscribe(
        () => {
          this.loadAnnouncements();
        },
        (error) => {
          console.error('Error deleting announcement', error);
        }
      );
    } else {
      console.error('Announcement ID is undefined');
    }
  }

  toggleAddAnnouncement(): void {
    this.showAddAnnouncement = !this.showAddAnnouncement;
    if (this.showAddAnnouncement) {
      this.showUpdateAnnouncement = false;
      this.announcementIdToUpdate = undefined;
    }
  }

  onAddAnnouncementClose(): void {
    this.showAddAnnouncement = false;
    this.loadAnnouncements();
  }

  toggleUpdateAnnouncement(id?: number): void {
    this.announcementIdToUpdate = id;
    this.showUpdateAnnouncement = !this.showUpdateAnnouncement;
    if (this.showUpdateAnnouncement) {
      this.showAddAnnouncement = false;
    }
  }

  onUpdateAnnouncementClose(): void {
    this.showUpdateAnnouncement = false;
    this.announcementIdToUpdate = undefined;
    this.loadAnnouncements();
  }
}
