import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Placedstudents } from '../_models/placedstudents';
import { TposerviceService } from '../_services/tposervice.service';

@Component({
  selector: 'app-addplacedstudent',
  templateUrl: './addplacedstudent.component.html',
  styleUrls: ['./addplacedstudent.component.css']
})
export class AddplacedstudentComponent implements OnInit {
  
  public Showmsg: string="";

  constructor(
    public dataobj: Placedstudents,
    public serviceobj: TposerviceService
  ) { }

  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.dataobj.student_name);
    console.log(this.dataobj.registration_number);
    console.log(this.dataobj.department);
    console.log(this.dataobj.company_id);
    console.log(this.dataobj.company_name);
    console.log(this.dataobj.academic_year);

    this.serviceobj.AddPlacedStudent(this.dataobj).subscribe((response: any) => {
      console.log('GOT REPLY FROM SPRINGBOOT');
      console.log(response);
      this.Showmsg = 'STUDENT DETAILS ADDED';
      this.resetRegForm(form);
    });
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
