import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CompanyListComponent,
    CourseFormComponent,
    CompanyFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
