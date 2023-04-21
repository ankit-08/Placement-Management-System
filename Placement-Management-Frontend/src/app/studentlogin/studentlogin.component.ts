import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Studentdetails} from '../_models/studentdetails';
import { NgForm } from '@angular/forms';
import { StudentserviceService } from '../_services/studentservice.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  public Showmsg: string="";
    constructor(public stdobj:Studentdetails, 
    public serviceobj: StudentserviceService,
    public router: Router) { }

  onSubmit(form: NgForm) {
  
    console.log("entered mail is ------"+this.stdobj.email);
    

    this.serviceobj.StudentLogin(this.stdobj)
       .subscribe((response: any) => {
        console.log("GOT REPLY FROM SPRINGBOOT");
        console.log(response)
       
        if(response!=null){
          sessionStorage.setItem("LoginstudentFirstname",response.first_name)
          sessionStorage.setItem("LoginstudentLastname",response.last_name)
          this.router.navigate(['/studentafterlogin']);
        }
        else{
          this.Showmsg="Invalid Email or Password"
        }
   
        
        
      });
  }

  resetRegForm(form: NgForm) {
    form.resetForm();
  }
  
  ngOnInit(): void {
  }

}
