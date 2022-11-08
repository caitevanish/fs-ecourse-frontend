import { Course } from 'src/app/common/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  getCourseDetails(id: number): Observable<Course> {
    return this.httpClient.get<Course>(this.baseUrl + `/${id}`);
  }

  saveCourse(): Observable<Course> {
    return this.httpClient.put<PutResponse>(this.baseUrl, Course)
    .pipe(map((response) => response._embedded.course));
  }
}
interface GetResponse {
  _embedded: {
    courses: Course[];
  };
}
interface PutResponse {
  _embedded: {
    course: Course;
  };
}
