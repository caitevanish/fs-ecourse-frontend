import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.listCourses();
  }

  
  // @To-Do: Get courses by user id!
  
  listCourses() {
    this.courseService.getCourseList().subscribe((data) => {
      this.courses = data;
    });
  }

  // @To-Do: Get courses by company id
}
