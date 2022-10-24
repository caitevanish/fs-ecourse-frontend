import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/common/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course!: Course;
  // course: Course = new Course();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleCourseDetails();
      // this.course = this.courseService.getCourseDetails(id);
    });
  }


  handleCourseDetails() {
    const theCourseId: number = +this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCourseDetails(theCourseId).subscribe((data) => {
      this.course = data;
    });
  }
}
