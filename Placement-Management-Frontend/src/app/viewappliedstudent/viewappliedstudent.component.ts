import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appliedcompany } from '../_models/appliedcompany'
import { TposerviceService } from '../_services/tposervice.service'
@Component({
  selector: 'app-viewappliedstudent',
  templateUrl: './viewappliedstudent.component.html',
  styleUrls: ['./viewappliedstudent.component.css']
})
export class ViewappliedstudentComponent implements OnInit {
  showmsg: string = ""
  showtable = false

  appliedstudentsarr: Appliedcompany[];
  constructor(public dataobj: Appliedcompany, public serviceobj: TposerviceService) { }


  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    // console.log(this.dataobj.name);
    // console.log(this.dataobj.email);
    // console.log(this.dataobj.company_name);
    // console.log(this.dataobj.company_id);
    // console.log(this.dataobj.registration_number);

    console.log(this.dataobj.department);


    this.serviceobj.viewAppliedStudent(this.dataobj)
      .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        this.appliedstudentsarr = response
        if (response != null) {
          this.showmsg = "";
          this.appliedstudentsarr = response
          this.showtable = true
        }
        else {
          this.showmsg = "No Record Found"
          this.showtable = false

        }

      });


  }



  onSubmitViewall(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.dataobj.department);


    this.serviceobj.viewAppliedStudentAllRecord()
      .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        this.appliedstudentsarr = response
        if (response != null) {
          this.showmsg = "";
          this.appliedstudentsarr = response
          this.showtable = true
        }
        else {
          this.showmsg = "No Record Found"
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
