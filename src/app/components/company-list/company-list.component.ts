import { CourseCompanyService } from './../../services/course-company.service';
import { CourseCompany } from './../../common/course-company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
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
