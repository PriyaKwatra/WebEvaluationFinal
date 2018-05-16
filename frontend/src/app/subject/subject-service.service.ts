import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from './Config'

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  BASE_URL="http://localhost:2001/api/subjects"
  Course_URL="http://localhost:2001/api/courses"
  constructor(private http:HttpClient) { 
         


  }

  getData(){
    return this.http.get<Subject>(this.BASE_URL)
  }

  getCourses(){
    return this.http.get(this.Course_URL)
  }


  postData(value){
    return this.http.post(this.BASE_URL,value)
  }

}

