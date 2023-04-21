import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{RegistrationComponent} from './registration/registration.component';
import{StudentloginComponent} from './studentlogin/studentlogin.component';
import{TpologinComponent} from './tpologin/tpologin.component';
import{ContactComponent} from './contact/contact.component';
import{AboutComponent} from './about/about.component';
import{AddplacedstudentComponent} from './addplacedstudent/addplacedstudent.component';
import{SearchstudentComponent} from './searchstudent/searchstudent.component';
import{ViewappliedstudentComponent} from './viewappliedstudent/viewappliedstudent.component';
import{ViewplacedstudentComponent} from './viewplacedstudent/viewplacedstudent.component';
import{AfterstudentloginComponent} from './afterstudentlogin/afterstudentlogin.component';
import{AftertpologinComponent} from './aftertpologin/aftertpologin.component';
import{ViewIncomingcompanybydeptComponent} from './viewincomingcompanybydept/viewincomingcompanybydept.component';
import{StudentafterloginComponent} from'./studentafterlogin/studentafterlogin.component';
import{TpoafterloginComponent} from './tpoafterlogin/tpoafterlogin.component';
import{AddincomingcompanyComponent} from './addincomingcompany/addincomingcompany.component';
import{ViewallstudentrecordsComponent} from './viewallstudentrecords/viewallstudentrecords.component';
import{CompanyapplyComponent} from './companyapply/companyapply.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'studentlogin',
    component: StudentloginComponent
  },
  {
    path: 'tpologin',
    component: TpologinComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'addplacedstudent',
    component: AddplacedstudentComponent
  },
  {
    path: 'searchstudent',
    component: SearchstudentComponent
  },
  {
    path: 'viewappliedstudent',
    component: ViewappliedstudentComponent
  },
  {
    path: 'viewplacedstudent',
    component: ViewplacedstudentComponent
  },
  {
    path: 'afterstudentlogin',
    component: AfterstudentloginComponent
    // not using
  },
  {
    path: 'aftertpologin',
    component: AftertpologinComponent
    // not using
  },
  {
    path: 'viewincomingcompanybydept',
    component: ViewIncomingcompanybydeptComponent
  },
  {
    path: 'studentafterlogin',
    component: StudentafterloginComponent
  },
  {
    path: 'tpoafterlogin',
    component: TpoafterloginComponent
  },
  {
    path: 'addincomingcompany',
    component: AddincomingcompanyComponent
  },
  {
    path: 'viewallstudentrecords',
    component: ViewallstudentrecordsComponent
  },
  {
    path: 'companyapply',
    component: CompanyapplyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
