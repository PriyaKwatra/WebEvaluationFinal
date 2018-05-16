import { Component, OnInit } from '@angular/core';
import {Course} from './config'
import { CourseserviceService } from './courseservice.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  
  courseList:Course[]
  coursename:string
  CourseName
  BatchList=[]
  LectureList=[]
  StudentList=[]
  show1:boolean=false;
  showlectures:boolean=false;
  showstudents:boolean=false;
  courseId
  batchId
  constructor(private data:CourseserviceService){
    this.courseList=[];
   }

   viewLectures(batchid){
     this.batchId=batchid
    this.showlectures=true;
    this.showstudents=false

    this.data.getLectures(this.courseId,batchid+1)
    .subscribe((event:any)=>{
      this.LectureList=event
      console.log(this.LectureList)
    })



   }
   viewStudents(batchid){
    this.showlectures=false;
    this.showstudents=true;

    this.data.getStudents(this.courseId,batchid+1)
    .subscribe((event:any)=>{
      this.StudentList=event
      console.log(this.StudentList)
    })

   }
  ngOnInit()
  {
    console.log("okkk dokieeee")
    this.data.getData()
    .subscribe((event:any)=>{
      this.courseList=event
      console.log(this.courseList)
    })
  }

  sendLecture(lecturename){
    this.LectureList.push({
      lecturename:lecturename,
      id:(this.LectureList.length+1),
      courseId:this.courseId,
      batchId:this.batchId

    })
       
         var  mydata={
          lecturename:lecturename,
          
         }
         
          this.data.postlecture(mydata,this.courseId+1,this.batchId+1)
          .subscribe((event)=>{
            console.log(event)
          })
          


  }

  postbatch(batchname)
  {this.BatchList.push({
    batchname:batchname,
    id:(this.BatchList.length+1)
  })
     
       var  mydata={
        batchname:batchname,
        courseId:this.courseId
       }
       
        this.data.postbatch(mydata,this.courseId)
        .subscribe((event)=>{
          console.log(event)
        })
        



  }





  batchshow(i)
  {
    this.show1=true
    this.courseId=i
    this.CourseName=this.courseList[i-1].coursename
    this.data.getbatches(i)
    .subscribe((event:any)=>{
      this.BatchList=event
      console.log(this.BatchList)
    })

  }

  send(coursename:string)
  {
    this.courseList.push({
      coursename:coursename,
      id:(this.courseList.length+1)
    })
       
         var  mydata={
           coursename:coursename
         }
         
          this.data.postData(mydata)
          .subscribe((event)=>{
            console.log(event)
          })
          

  }



}
