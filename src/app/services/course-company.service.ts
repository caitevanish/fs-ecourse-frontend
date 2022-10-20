import { CourseCompany } from './../common/course-company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseCompanyService {
  private baseUrl = 'http://localhost:8080/api/course-company';

  constructor(private httpClient: HttpClient) {}

  getCompanyList(): Observable<CourseCompany[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.companies));
  }
}
interface GetResponse {
  _embedded: {
    companies: CourseCompany[];
  };
}
