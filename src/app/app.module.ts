import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { DashboardHrComponent } from './dashboard-hr/dashboard-hr.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ProjectsComponent } from './projects/projects.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { BodyEmployeeDashbordComponent } from './dashboard-client/body-employee-dashbord/body-employee-dashbord.component';
import { RouterModule } from '@angular/router';
import { HttpRequestInterceptor } from './login/helpers/http.interceptor';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { AddUserComponent } from './dashboard-components/users/add-user/add-user.component';
import { UpdateUserComponent } from './dashboard-components/users/update-user/update-user.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ApplyLeaveComponent } from './dashboard-client/apply-leave/apply-leave.component';
import { NavBarMenuLeaveComponent } from './dashboard-client/nav-bar-menu-leave/nav-bar-menu-leave.component';
import { LeaveComponent } from './dashboard-client/leave/leave.component';
import { ComplaintsComponent } from './dashboard-client/complaints/complaints.component';
import { SidebarComponent } from './dashboard-client/sidebar/sidebar.component';
import { AnnouncementComponent } from './dashboard-components/announcements/announcements.component';
import { AddAnnouncementComponent } from './dashboard-components/announcements/add-announcement/add-announcement.component';
import { UpdateAnnouncementComponent } from './dashboard-components/announcements/update-announcement/update-announcement.component';
import { AddComplaintComponent } from './dashboard-components/complaints/add-complaint/add-complaint.component';
import { UpdateComplaintComponent } from './dashboard-components/complaints/update-complaint/update-complaint.component';
import { AddTaskComponent } from './dashboard-components/tasks/add-task/add-task.component';
import { TasksComponent } from './dashboard-components/tasks/tasks.component';
import { UpdateTaskComponent } from './dashboard-components/tasks/update-task/update-task.component';
import { ComplaintsComponent2 } from './dashboard-components/complaints/complaints.component';
import { UploadFileComponent } from './dashboard-components/files/upload-file/upload-file.component';
import { HolidaysComponent } from './dashboard-components/holidays/holidays.component';
import { AddHolidayComponent } from './dashboard-components/holidays/add-holiday/add-holiday.component';
import { UpdateHolidayComponent } from './dashboard-components/holidays/update-holiday/update-holiday.component';
import { UpdateLeaveRequestComponent } from './dashboard-components/leaverequests/update-leaverequests/update-leaverequests.component';
import { LeaveRequestsComponent } from './dashboard-components/leaverequests/leaverequests.component';
import { FilesComponent } from './dashboard-components/files/files.component';
import { NavBarMenuComponent } from './dashboard-client/nav-bar-menu/nav-bar-menu.component';
import { ProfileEmployeeComponent } from './dashboard-client/profile-employee/profile-employee.component';
import { MesLeaveComponent } from './dashboard-client/mes-leave/mes-leave.component';
import { TaskTrackingComponent } from './dashboard-client/task-tracking/task-tracking.component';
import { NavBarAttendancesComponent } from './dashboard-client/nav-bar-attendances/nav-bar-attendances.component';
import { AttendancesEmployeeComponent } from './dashboard-client/attendances/attendances.component';
import { NavBarComplaintsComponent } from './dashboard-client/nav-bar-complaints/nav-bar-complaints.component';
import { DatePipe } from '@angular/common';
import { ComplaintListComponent } from './dashboard-client/complaint-list/complaint-list.component';
import { AttendanceListComponent } from './dashboard-client/attendance-list/attendance-list.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    ProjectsComponent,
    NavigationComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
    LoginComponent,
   DashboardHrComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardClientComponent,
    AddUserComponent,
    UpdateUserComponent,
    UsersComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    NavBarMenuLeaveComponent,
    LeaveComponent,
    ComplaintsComponent,SidebarComponent,
    AnnouncementComponent,
    AddAnnouncementComponent,
    UpdateAnnouncementComponent,
    ApplyLeaveComponent,
    ComplaintsComponent,
    AddComplaintComponent,
    UpdateComplaintComponent,
    AddTaskComponent,
    TasksComponent,
    UpdateTaskComponent,
    ComplaintsComponent2,
    UploadFileComponent,
    HolidaysComponent,
    AddHolidayComponent,
    UpdateHolidayComponent,
    UpdateLeaveRequestComponent,
    LeaveRequestsComponent,
    FilesComponent,
    SidebarComponent,
    NavBarMenuComponent,
    AppComponent,
    AdminComponent,
    NavBarComponent,
    ProjectsComponent,
    NavigationComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
    LoginComponent,
   DashboardHrComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardClientComponent,
    AddUserComponent,
    UpdateUserComponent,
    UsersComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    ApplyLeaveComponent,
    NavBarMenuComponent,
    LeaveComponent,
    ComplaintsComponent,SidebarComponent,
    BodyEmployeeDashbordComponent,
    ProfileEmployeeComponent,
    MesLeaveComponent,
    TaskTrackingComponent,
    AttendancesEmployeeComponent,
    NavBarAttendancesComponent,
    NavBarComplaintsComponent,
    ComplaintListComponent,
    AttendanceListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserAnimationsModule,
    HttpClientModule,RouterModule,MatInputModule,MatDatepickerModule,MatNativeDateModule ,MatIconModule ,BaseChartDirective],
  providers: [ DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass:HttpRequestInterceptor , multi: true },],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
