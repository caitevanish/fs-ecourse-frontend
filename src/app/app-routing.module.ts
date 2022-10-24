import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // {path: "login", component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  // {path: "company-courses", component: }
  // {path: "profile", component: ProfileComponent}
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
