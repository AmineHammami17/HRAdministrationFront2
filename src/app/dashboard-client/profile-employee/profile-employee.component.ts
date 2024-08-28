import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-profile-employee',
  templateUrl: './profile-employee.component.html',
  styleUrls: ['./profile-employee.component.scss']
})
export class ProfileEmployeeComponent implements OnInit {
  user: any;
  profileImage: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.authService.GetuserLogin().subscribe(
      data => {
        console.log('User data:', data);
        this.user = data;
        sessionStorage.setItem('id', this.user.id);
        this.loadProfileImage(); 
      },
      err => {
        console.error('Error fetching user data:', err);
      }
    );
  }

  loadProfileImage(): void {
    const filename = this.user?.displayPictureFilename;
    if (filename) {
      this.usersService.getImage(filename).subscribe(
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadProfilePicture(); 
    }
  }

  uploadProfilePicture(): void {
    if (this.selectedFile && this.user?.id) {
      this.usersService.uploadUserProfilePicture(this.user.id, this.selectedFile).subscribe(
        (updatedUser: any) => {
          console.log('Profile picture uploaded successfully', updatedUser);
          this.user = updatedUser;
          this.profileImage = null; 
          this.loadProfileImage();
        },
        (err) => {
          console.error('Error uploading profile picture:', err);
        }
      );
    } else {
      console.error('No file selected or user not found');
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }
}
