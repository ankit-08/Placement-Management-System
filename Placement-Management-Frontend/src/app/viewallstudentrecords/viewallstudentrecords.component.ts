import { Component, OnInit } from '@angular/core';

import {Studentdetails}from '../_models/studentdetails'
import {TposerviceService} from '../_services/tposervice.service'


@Component({
  selector: 'app-viewallstudentrecords',
  templateUrl: './viewallstudentrecords.component.html',
  styleUrls: ['./viewallstudentrecords.component.css']
})
export class ViewallstudentrecordsComponent implements OnInit {
  showmsg:string=""
 

  studentrecordsarr: Studentdetails[];
  constructor(public stdobj:Studentdetails ,public serviceobj:TposerviceService) { }

  ngOnInit(): void {
    this.serviceobj.viewAllRecords()
       .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        console.log(response)
   
        this.studentrecordsarr=response
        
      });
  }

}

