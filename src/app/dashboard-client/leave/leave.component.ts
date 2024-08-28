import { Component, OnInit } from '@angular/core';
import { LeaveRequestsService } from '../../services/leaverequests/leaverequests.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  leaveDetails: { [reason: string]: { maxDays: number; currentDays: number } } = {};
  val= 5;

  constructor(private leaveService: LeaveRequestsService) {}

  ngOnInit(): void {
    const userId = 4;
    const leaveReasons = [
      'ANNUAL',
      'MEDICAL',
      'HOSPITALIZATION',
      'COMPASSIONATE',
      'MARRIAGE',
      'MATERNITY',
      'REPLACEMENT'
    ];

    leaveReasons.forEach(reason => {
      this.leaveService.getLeaveDetails(userId, reason).subscribe(data => {
        this.leaveDetails[reason] = {
          maxDays: data.maxDays,
          currentDays: data.currentDays
        };
      });
    });
  }
}
