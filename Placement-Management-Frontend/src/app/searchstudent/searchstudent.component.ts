import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Studentdetails}from '../_models/studentdetails'
import {TposerviceService} from '../_services/tposervice.service'

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {
  showmsg:string=""
  showtable=false

  studentrecordsarr: Studentdetails[];
  constructor(public stdobj:Studentdetails ,public serviceobj:TposerviceService) { }


  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.stdobj.first_name);
    console.log(this.stdobj.last_name);
    console.log(this.stdobj.father_name);
    console.log(this.stdobj.mother_name);
    console.log(this.stdobj.registration_number);
    console.log(this.stdobj.roll_number);
    console.log(this.stdobj.mobile_number);
    console.log(this.stdobj.email);
    console.log(this.stdobj.address);
    console.log(this.stdobj.department);

    this.serviceobj.viewSearchedRecords(this.stdobj)
       .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        console.log(response)
        this.studentrecordsarr = response
        if (response != null) {
          this.showmsg = "Record Found";
          this.studentrecordsarr = response
          this.showtable = true

        }
        else {
          this.showmsg = "INVALID EMAIL ID"
          this.showtable = false

        }
        
      });

    
  }
//CLEAR FROM

  resetRegForm(form: NgForm) {
    form.resetForm();
  }

  ngOnInit(): void {}
}



