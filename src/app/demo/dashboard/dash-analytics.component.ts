import { Component, ViewChild, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ProjectService } from 'src/app/services/projects/projects.service';
import { UsersService } from 'src/app/services/users/users.service';
import { AttendancesService } from 'src/app/services/attendances/attendances.service';
import { HolidaysService } from 'src/app/services/holidays/holidays.service';
@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export default class DashAnalyticsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('customerChart') customerChart!: ChartComponent;

  totalUsers: number = 0;
  totalProjects: number = 0;
  totalAttendances: number = 0;
  upcomingHolidays: { name: string, date: Date }[] = [];

  cards = [
    {
      background: 'bg-c-blue',
      title: 'Total Users',
      icon: 'icon-user',
      number: this.totalUsers,
      text: 'Total number of users in the system',
      no: ''
    },
    {
      background: 'bg-c-green',
      title: 'Total Projects',
      icon: 'icon-briefcase',
      number: this.totalProjects,
      text: 'Total number of projects',
      no: ''
    },
    {
      background: 'bg-c-yellow',
      title: 'Total Attendances',
      icon: 'icon-calendar',
      number: this.totalAttendances,
      text: 'Total number of attendance records',
      no: ''
    }
  ];

  constructor(
    private userService: UsersService,
    private projectService: ProjectService,
    private attendanceService: AttendancesService,
    private holidayService: HolidaysService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadUpcomingHolidays();
  }

  loadDashboardData() {
    this.userService.getTotalUsers().subscribe((data: number) => {
      this.totalUsers = data;
      this.updateCards();
    });

    this.projectService.getTotalProjects().subscribe((data: number) => {
      this.totalProjects = data;
      this.updateCards();
    });

    this.attendanceService.getTotalAttendances().subscribe((data: number) => {
      this.totalAttendances = data;
      this.updateCards();
    });
  }

  loadUpcomingHolidays() {
    this.holidayService.getUpcomingHolidays().subscribe((data: any[]) => {
      this.upcomingHolidays = data;
      console.log(data, "Upcoming Holidays Data"); 
    });
  }

  updateCards() {
    this.cards = [
      {
        background: 'bg-c-blue',
        title: 'Total Users',
        icon: 'icon-user',
        number: this.totalUsers,
        text: 'Total number of users in the system',
        no: ''
      },
      {
        background: 'bg-c-green',
        title: 'Total Projects',
        icon: 'icon-briefcase',
        number: this.totalProjects,
        text: 'Total number of projects',
        no: ''
      },
      {
        background: 'bg-c-yellow',
        title: 'Total Attendances',
        icon: 'icon-calendar',
        number: this.totalAttendances,
        text: 'Total number of attendance records',
        no: ''
      }
    ];
  }
}
