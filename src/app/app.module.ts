import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProjectsComponent } from './projects/projects.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { BodyEmployeeDashbordComponent } from './body-employee-dashbord/body-employee-dashbord.component';
import { RouterModule } from '@angular/router';
import { HttpRequestInterceptor } from './helpers/http.interceptor';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { AddUserComponent } from './dashboard-components/users/add-user/add-user.component';
import { UpdateUserComponent } from './dashboard-components/users/update-user/update-user.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { NavBarMenuLeaveComponent } from './nav-bar-menu-leave/nav-bar-menu-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { MesLeaveComponent } from './mes-leave/mes-leave.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import { Holiday } from '../../.history/src/app/models/holiday_20240814114237';
import { HolidaysComponent } from './dashboard-components/holidays/holidays.component';
import { AddHolidayComponent } from './dashboard-components/holidays/add-holiday/add-holiday.component';
import { UpdateHolidayComponent } from './dashboard-components/holidays/update-holiday/update-holiday.component';
import { UpdateLeaveRequestComponent } from './dashboard-components/leaverequests/update-leaverequests/update-leaverequests.component';
import { LeaveRequestsComponent } from './dashboard-components/leaverequests/leaverequests.component';
import { FilesComponent } from './dashboard-components/files/files.component';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
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
    UnauthorizedComponent,
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
    UnauthorizedComponent,
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
    NavBarMenuLeaveComponent,
    ProfileEmployeeComponent,
    LeaveComponent,
    ComplaintsComponent,SidebarComponent,
    BodyEmployeeDashbordComponent,
    MesLeaveComponent,


  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserAnimationsModule,
    HttpClientModule,RouterModule,MatInputModule,MatDatepickerModule,MatNativeDateModule ,MatIconModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:HttpRequestInterceptor , multi: true },],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
