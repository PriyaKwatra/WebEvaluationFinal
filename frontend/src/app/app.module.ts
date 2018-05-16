import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {CourseserviceService} from './course/courseservice.service'
import {StudentServiceService} from './student/student-service.service'
import {TeacherServiceService} from './teacher/teacher-service.service'
import {SubjectServiceService} from './subject/subject-service.service'
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { StudentComponent } from './student/student.component';

import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';


const appRoutes: Routes = [
  { path: 'courses', component: CourseComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'students', component: StudentComponent },
  { path: 'courses/addCourse', component: CourseComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AddCourseComponent,
    StudentComponent,
    TeacherComponent,
    TeacherComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )

  ],
  providers: [CourseserviceService,StudentServiceService,SubjectServiceService,TeacherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
