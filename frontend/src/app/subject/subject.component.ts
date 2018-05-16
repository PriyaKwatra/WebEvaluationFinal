import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from './subject-service.service';
import {Subject} from './Config'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  SubjectList:Subject[]
  CourseList=[]
  courseId=9
  constructor(private data:SubjectServiceService){
    this.SubjectList=[];
   }

  ngOnInit()
  {
    console.log("okkk dokieeee")
    this.data.getData()
    .subscribe((event:any)=>{
      this.SubjectList=event
      console.log(this.SubjectList)
    })

    this.data.getCourses()
    .subscribe((event:any)=>{
      this.CourseList=event
      console.log(this.CourseList)
    })
  }


  send(subjectname:string)
  {
    this.SubjectList.push({
      subjectname:subjectname,
      id:(this.SubjectList.length+1),
      courseId:this.courseId
    })
       
         var  mydata={
          subjectname:subjectname,
          courseid:(this.courseId)
         }
         
          this.data.postData(mydata)
          .subscribe((event)=>{
            console.log(event)
          })
          

  }



}


