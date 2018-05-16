import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import {Student} from './Config'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  StudentList:Student[]
  BatchList=[]
  studentname=""
  studentId
  batchId;
  show:boolean=false
  constructor(private data:StudentServiceService){
    this.StudentList=[];
   }

  ngOnInit()
  {
    console.log("okkk dokieeee")
    this.data.getData()
    .subscribe((event:any)=>{
      this.StudentList=event
      console.log(this.StudentList)
    })

    this.data.getBatches()
    .subscribe((event:any)=>{
      this.BatchList=event
      console.log(this.BatchList)
    })
  
  }

  findstudent(studentid){
    this.show=true
    this.studentId=studentid
    this.studentname=this.StudentList[parseInt(studentid)-1].studentname;
  }


  sendBatchStudent()
  {
   
       
         var  mydata={
           batchId:this.batchId,
           studentId:this.studentId
         }
         
          this.data.postbatchstudent(mydata,this.studentId)
          .subscribe((event)=>{
            console.log(event)
          })
          

  }
  

  send(studentname:string)
  {
    this.StudentList.push({
      studentname:studentname,
      id:(this.StudentList.length+1)
    })
       
         var  mydata={
           studentname:studentname
         }
         
          this.data.postData(mydata)
          .subscribe((event)=>{
            console.log(event)
          })
          

  }
}
