import { Component, OnInit } from '@angular/core';
import {Course} from './course'
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
