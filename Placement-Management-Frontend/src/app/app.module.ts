import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// system defind added modules

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// added components

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { TpologinComponent } from './tpologin/tpologin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CompanyapplyComponent } from './companyapply/companyapply.component';
import { ViewappliedstudentComponent } from './viewappliedstudent/viewappliedstudent.component';
import { AddplacedstudentComponent } from './addplacedstudent/addplacedstudent.component';
import { ViewplacedstudentComponent } from './viewplacedstudent/viewplacedstudent.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { RegistrationComponent } from './registration/registration.component';
import { AfterstudentloginComponent } from './afterstudentlogin/afterstudentlogin.component';
import { AftertpologinComponent } from './aftertpologin/aftertpologin.component';
import { StudentnavComponent } from './studentnav/studentnav.component';
import { TponavComponent } from './tponav/tponav.component';
import { ViewIncomingcompanybydeptComponent } from './viewincomingcompanybydept/viewincomingcompanybydept.component';
import { StudentafterloginComponent } from './studentafterlogin/studentafterlogin.component';
import { TpoafterloginComponent } from './tpoafterlogin/tpoafterlogin.component';
import { ViewallstudentrecordsComponent } from './viewallstudentrecords/viewallstudentrecords.component';
import { AddincomingcompanyComponent } from './addincomingcompany/addincomingcompany.component';

// added model

import{Studentdetails} from './_models/studentdetails';
import{Placedstudents} from './_models/placedstudents';
import{Incomingcompany} from './_models/incomingcompany';
import{Appliedcompany} from'./_models/appliedcompany';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    StudentloginComponent,
    TpologinComponent,
    ContactComponent,
    AboutComponent,
    CompanyapplyComponent,
    ViewappliedstudentComponent,
    AddplacedstudentComponent,
    ViewplacedstudentComponent,
    SearchstudentComponent,
    RegistrationComponent,
    AfterstudentloginComponent,
    AftertpologinComponent,
    StudentnavComponent,
    TponavComponent,
    ViewIncomingcompanybydeptComponent,
    StudentafterloginComponent,
    TpoafterloginComponent,
    AddincomingcompanyComponent,
    ViewallstudentrecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Studentdetails,
    Placedstudents,
    Incomingcompany,
    Appliedcompany
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
