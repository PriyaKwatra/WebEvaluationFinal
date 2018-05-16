import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from './Config'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  BASE_URL="http://localhost:2001/api/students"
  Batch_URL="http://localhost:2001/api/batches"
  constructor(private http:HttpClient) { 
         }

  getData(){
    return this.http.get<Student>(this.BASE_URL)
  }
  getBatches(){
    return this.http.get(this.Batch_URL)
  }
  postData(value){
    return this.http.post(this.BASE_URL,value)
  }

  postbatchstudent(value,id){
    return this.http.post(this.BASE_URL+'/'+id+'/batches',value)
    
  }
}
