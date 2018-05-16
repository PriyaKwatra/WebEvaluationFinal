import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from './teacher-service.service';
import {Teacher} from './Config'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  TeacherList:Teacher[]
   SubjectList=[]
   subjectId
  constructor(private data:TeacherServiceService){
    this.TeacherList=[];
   }

  ngOnInit()
  {
    console.log("okkk dokieeee")
    this.data.getData()
    .subscribe((event:any)=>{
      this.TeacherList=event
      console.log(this.TeacherList)
    })

    this.data.getSubjects()
    .subscribe((event:any)=>{
      this.SubjectList=event
      console.log(this.SubjectList)
    })
  }

  send(teachername:string)
  {
    this.TeacherList.push({
      teachername:teachername,
      id:(this.TeacherList.length+1),
      subjectId:this.subjectId
    })
       
         var  mydata={
          teachername:teachername,
          subjectId:(this.subjectId)
         }
         
          this.data.postData(mydata)
          .subscribe((event)=>{
            console.log(event)
          })
          

  }



}