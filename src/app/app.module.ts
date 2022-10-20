import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [AppComponent, CourseListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
