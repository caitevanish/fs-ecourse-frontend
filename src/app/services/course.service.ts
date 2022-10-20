import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../common/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) {}

  getCourseList(): Observable<Course[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.courses));
  }
}
interface GetResponse {
  _embedded: {
    courses: Course[];
  };
}
