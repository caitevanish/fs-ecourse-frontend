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
  newCourseFormGroup!: FormGroup;
  newCompanyFormGroup!: FormGroup;

  courseTitle: string = '';
  company: string = '';
  price: number = 0;
  date!: Date;

  isShowingCompanyForm = false;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newCourseFormGroup = this.formBuilder.group({
      course: this.formBuilder.group({
        title: [''],
        company: [''],
        //courseType: [''],   ie. lifetime access, subscription, etc.
        price: [''],
        datePurchased: [''],
      }),
    });
    this.newCourseFormGroup = this.formBuilder.group({
      company: this.formBuilder.group({
        companyName: [''],
        website: [''],
      }),
    });
  }

  addNewCompany(event) {
    if (event.target.checked) {
      console.log('Clicked add new company button');
    }
  }

  onSubmit() {
    console.log('Clicked add new course button');
    console.log(this.newCourseFormGroup.get('course')?.value);

    //   const newCourse: Course = {
    //     id: 0,
    //     user_id: 0,
    //     title: this.courseTitle,
    //     company_id: 0,
    //     price: this.price,
    //     date_purchased: this.date,
    //   };

    //   this.courseService.saveCourse(newCourse);
    //   console.log(newCourse);
    // }
  }
}
