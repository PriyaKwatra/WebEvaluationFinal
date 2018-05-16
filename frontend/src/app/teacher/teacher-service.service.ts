import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Teacher} from './Config'

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  BASE_URL="http://localhost:2001/api/teachers"
  SUBJECT_URL="http://localhost:2001/api/subjects"
  constructor(private http:HttpClient) { 
         


  }
  getSubjects(){
    return this.http.get(this.SUBJECT_URL)
  }

  getData(){
    return this.http.get<Teacher>(this.BASE_URL)
  }

  postData(value){
    return this.http.post(this.BASE_URL,value)
  }

}
