import { Component } from '@angular/core';
import { StudentServiceService } from './student/student-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  BatchList=[]

  constructor(private data:StudentServiceService){
    this.BatchList=[];
   }

  ngOnInit()
  {
    
    this.data.getBatches()
    .subscribe((event:any)=>{
      this.BatchList=event
      console.log(this.BatchList)
    })
  }

  }



