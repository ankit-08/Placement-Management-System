import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Appliedcompany } from '../_models/appliedcompany';
import { StudentserviceService } from '../_services/studentservice.service';


@Component({
  selector: 'app-companyapply',
  templateUrl: './companyapply.component.html',
  styleUrls: ['./companyapply.component.css']
})
export class CompanyapplyComponent implements OnInit {
  public Showmsg: string="";

  constructor(
    public dataobj: Appliedcompany,
    public serviceobj: StudentserviceService
  ) { }

    
  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.dataobj.name);
    console.log(this.dataobj.email);
    console.log(this.dataobj.company_id);
    console.log(this.dataobj.company_name);
    

    this.serviceobj.AddAppliedCompanyRecord(this.dataobj).subscribe((response: any) => {
      console.log('GOT REPLY FROM SPRINGBOOT');
      console.log(response);
      this.Showmsg = 'COMPANY APPLIED SUCCESSFULLY';
      this.resetRegForm(form);
    });
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }
  ngOnInit(): void {
  }

}
