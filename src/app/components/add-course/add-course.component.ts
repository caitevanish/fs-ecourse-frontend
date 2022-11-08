import { CourseService } from './../../services/course.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from 'src/app/common/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  newCourseForm!: FormGroup;

  courseTitle: string = '';
  company: string = '';
  price: number = 0;
  date!: Date;

  constructor(
    private httpClient: HttpClient,
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newCourseForm = new FormGroup({
      // courseTitle:
    }); //add more?
  }

  async addNewCourse() {
    console.log('Clicked add new course button');
    const newCourse: Course = {
      id: 0,
      user_id: 0,
      title: this.courseTitle,
      company_id: 0,
      price: this.price,
      date_purchased: this.date,
    };
  }
}
