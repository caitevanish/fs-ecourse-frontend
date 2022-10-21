import { Component } from '@angular/core';
import { CourseCompany } from './common/course-company';
import { CourseCompanyService } from './services/course-company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecourse';
  
  companies: CourseCompany[] = [];

  constructor(private courseCompanyService: CourseCompanyService) {}

  ngOnInit(): void {
    this.listCourseCompanies();
  }

  listCourseCompanies() {
    this.courseCompanyService.getCompanyList().subscribe((data) => {
      this.companies = data;
    });
  }
}
