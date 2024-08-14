import { Component, EventEmitter, Output } from '@angular/core';
import { AnnouncementsService } from 'src/app/services/announcements/announcements.service';
import { Announcement } from 'src/app/models/announcement';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent {
  @Output() closeAddAnnouncement = new EventEmitter<void>();

  announcement: Announcement = {
    id: 0,
    title: '',
    description: '',
    displayPicture: 0,
  };

  selectedFile: File | null = null;

  constructor(private announcementsService: AnnouncementsService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.announcementsService.uploadAnnouncement(
        this.announcement.title,
        this.announcement.description,
        this.selectedFile
      ).subscribe(() => {
        this.closeAddAnnouncement.emit();
      });
    }
  }

  onCancel(): void {
    this.closeAddAnnouncement.emit();
  }
}
