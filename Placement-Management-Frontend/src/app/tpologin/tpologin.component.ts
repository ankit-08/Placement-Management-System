import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tpologin',
  templateUrl: './tpologin.component.html',
  styleUrls: ['./tpologin.component.css']
})
export class TpologinComponent implements OnInit {
  public tpologinid: string = "";
  public tpopassword: string = "";

  Showmsg = ""
  constructor(public router: Router) { }
  onSubmit() {
    //console.log(this.tpologinid);
    //console.log(this.tpopassword);

    var uidmatch = this.tpologinid.localeCompare("admin");
    var passmatch = this.tpopassword.localeCompare("pass");

    if ((uidmatch == 0) && (passmatch == 0)) {
      console.log(" WELCOME ADMIN : Match");

      // STORE VALUE IN SESSION [KEY : VALUE]
      localStorage.setItem('usertype', 'ADMIN');
      //sessionStorage.setItem('usertype', 'ADMIN');

      //3. REDIRECT TO ADMIN_AFTER_LOGIN_COMPONENT
      this.router.navigate(['/tpoafterlogin']);

    }
    else {
      console.log(" WRONG USERID OR PASSWORD ");

      //DISPLAY ERROR MSG
      this.Showmsg = "INVALID UID OR PASSWORD";

      //CLEAR THE FIELD
      this.tpologinid = "";
      this.tpopassword = "";
    }

  }
  ngOnInit(): void {
  }

}



