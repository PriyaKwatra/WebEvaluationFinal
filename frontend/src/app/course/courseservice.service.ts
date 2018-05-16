import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from'./config'

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {
  Base_URL ='http://localhost:2001/api/courses'

  constructor(private http:HttpClient) { 
}

  getData(){
    return this.http.get<Course>(this.Base_URL)
  }

  
    getbatches(id){
    return this.http.get(this.Base_URL+'/'+id+'/batches')
  }

  postData(value){
    return this.http.post(this.Base_URL,value)
  }


  postbatch(value,id)
  {       
    return this.http.post(this.Base_URL+'/'+id+'/batches',value)

  }

  getLectures(courseId,batchid)
  {
    return this.http.get(this.Base_URL+'/'+courseId+'/batches'+'/'+batchid+'/'+'lectures')
  }

  getStudents(courseId,batchid){
    return this.http.get(this.Base_URL+'/'+courseId+'/batches'+'/'+batchid+'/'+'students')
  }
  postlecture(mydata,courseId,batchId)
  {
    return this.http.post(this.Base_URL+'/'+courseId+'/batches'+'/'+batchId+'/'+'lectures',mydata)
}
}