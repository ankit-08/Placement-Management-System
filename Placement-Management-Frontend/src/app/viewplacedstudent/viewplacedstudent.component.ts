import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Placedstudents}from '../_models/placedstudents'
import {StudentserviceService} from '../_services/studentservice.service'

@Component({
  selector: 'app-viewplacedstudent',
  templateUrl: './viewplacedstudent.component.html',
  styleUrls: ['./viewplacedstudent.component.css']
})
export class ViewplacedstudentComponent implements OnInit {
  Showmsg:string=""
  showtable=false

  placedstudentsarr: Placedstudents[];

  constructor(public dataobj:Placedstudents ,public serviceobj:StudentserviceService) { }

  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.dataobj.department);
    

    this.serviceobj.viewplacedstudent(this.dataobj)
       .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        console.log(response)
        this.placedstudentsarr = response
        if (response != null) {
          this.placedstudentsarr = response
          this.showtable = true
        }
        else {
          this.Showmsg = "Select any department"
          this.showtable = false

        }
        
      });

    
  }
//CLEAR FROM

  resetRegForm(form: NgForm) {
    form.resetForm();
  }
  ngOnInit(): void {
  }

}
