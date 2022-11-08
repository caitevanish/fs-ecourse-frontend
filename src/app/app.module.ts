import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CompanyListComponent,
    DashboardComponent,
    CourseDetailsComponent,
    AddCourseComponent,
    AddCompanyComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
