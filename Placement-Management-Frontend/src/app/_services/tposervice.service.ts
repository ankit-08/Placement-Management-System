import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Used models
import { Placedstudents } from '../_models/placedstudents';

import { Studentdetails } from '../_models/studentdetails';
import { Incomingcompany } from '../_models/incomingcompany';
import { Appliedcompany } from '../_models/appliedcompany';

@Injectable({
  providedIn: 'root',
})
export class TposerviceService {

  constructor(public http: HttpClient) {}


  viewAllRecords(){
    return this.http.get('http://localhost:8082/ViewAllRecords');
  }
  
  viewSearchedRecords(stdobj:any){
    return this.http.post('http://localhost:8082/viewSearchedRecords',stdobj);
  }
  
  AddIncomingCompany(incobj:any){
    return this.http.post('http://localhost:8082/AddIncomingCompany',incobj);
  }

  AddPlacedStudent(dataobj:any){
    return this.http.post('http://localhost:8082/AddPlacedStudent',dataobj);
  }

  viewAppliedStudent(dataobj:any) {
    return this.http.post('http://localhost:8082/viewAppliedStudent',dataobj);
  }
  viewAppliedStudentAllRecord(){
    return this.http.get('http://localhost:8082/viewAppliedStudentAllRecord');
  }

  
  deletecomapny(){}
  

}
