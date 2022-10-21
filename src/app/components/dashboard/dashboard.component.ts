import { Component, OnInit } from '@angular/core';
import { CourseCompany } from 'src/app/common/course-company';
import { CourseCompanyService } from 'src/app/services/course-company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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
