import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Incomingcompany } from '../_models/incomingcompany';
import { TposerviceService } from '../_services/tposervice.service';

@Component({
  selector: 'app-addincomingcompany',
  templateUrl: './addincomingcompany.component.html',
  styleUrls: ['./addincomingcompany.component.css']
})
export class AddincomingcompanyComponent implements OnInit {

  public Showmsg: string="";

  constructor(
    public incobj: Incomingcompany,
    public serviceobj: TposerviceService
  ) {}
  

    

  onSubmit(form: NgForm) {
    console.log('INSIDE ONSUBMIT METHOD');
    console.log(this.incobj.company_id);
    console.log(this.incobj.company_name);
    console.log(this.incobj.company_address);
    console.log(this.incobj.Job_loaction);
    console.log(this.incobj.ctc);
    console.log(this.incobj.requirement);
    console.log(this.incobj.date);

    this.serviceobj.AddIncomingCompany(this.incobj).subscribe((response: any) => {
      console.log('GOT REPLY FROM SPRINGBOOT');
      console.log(response);
      this.Showmsg = 'COMPANY ADDED';
      this.resetRegForm(form);
    });

    
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }
  ngOnInit(): void {
    
  }
}


