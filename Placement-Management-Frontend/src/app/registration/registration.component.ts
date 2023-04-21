import { Component, OnInit } from '@angular/core';
import { Studentdetails } from '../_models/studentdetails';
import { NgForm } from '@angular/forms';

import { StudentserviceService } from '../_services/studentservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public Showmsg: string="";

  constructor(
    public stdobj: Studentdetails,
    public serviceobj: StudentserviceService
  ) {}

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

    this.serviceobj.AddStudentRecord(this.stdobj).subscribe((response: any) => {
      console.log('GOT REPLY FROM SPRINGBOOT');
      console.log(response);
      this.Showmsg = 'REGISTRATION SUCCESSFUL';
      this.resetRegForm(form);
    });
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }

  ngOnInit(): void {}
}
