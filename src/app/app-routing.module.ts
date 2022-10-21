import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

const routes: Routes = [
  // {path: "", redirectTo: "/welcome", pathMatch: "full" },
  // {path: "login", component: LoginComponent },
  // {path: "dashboard", component: },
  {path: "new-course", component: CourseFormComponent },
  {path: "new-company", component: CompanyFormComponent},
  {path: "course-list", component: CourseListComponent},
  {path: "company-list", component: CompanyListComponent}
  // {path: "company-courses", component: }
  // {path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
