import { Component, OnInit } from '@angular/core';
import { LeaveRequestsService } from '../services/leaverequests/leaverequests.service';
import { UsersService } from '../services/users/users.service';
import { User } from 'src/app/models/user'; // Assuming you have a User model

@Component({
  selector: 'app-mes-leave',
  templateUrl: './mes-leave.component.html',
  styleUrls: ['./mes-leave.component.scss']
})
export class MesLeaveComponent implements OnInit {
  leaves: any[] = [];

  constructor(
    private leaveService: LeaveRequestsService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      (currentUser: User) => {
        if (currentUser && currentUser.id) {
          const userId = currentUser.id;
          this.leaveService.getLeaveRequestsByUserId(userId).subscribe(
            (res) => {
              console.log('Fetched leave requests:', res);
              this.leaves = res.reverse();
            },
            (err) => {
              console.error('Error fetching leave requests:', err);
            }
          );
        } else {
          console.error('User ID not found.');
        }
      },
      (err) => {
        console.error('Error fetching current user:', err);
      }
    );
  }
}
