import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentafterlogin',
  templateUrl: './studentafterlogin.component.html',
  styleUrls: ['./studentafterlogin.component.css']
})
export class StudentafterloginComponent implements OnInit {
  first_name: string=""
  last_name: string=""

  constructor(
  ) {
    this.first_name=sessionStorage.getItem("LoginstudentFirstname"),
    this.last_name=sessionStorage.getItem("LoginstudentLastname")
   }

  ngOnInit(): void {
  }

}
