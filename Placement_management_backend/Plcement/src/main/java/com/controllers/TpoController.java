package com.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.models.Appliedcompany;
import com.models.Incomingcompany;
import com.models.Placedstudents;

//imported models and services
import com.models.Studentdetails;
import com.services.TpoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TpoController {
	@Autowired
	private TpoService tposerviceobj;
	
	
	
	@GetMapping("/ViewAllRecords")
	public ArrayList<Studentdetails> viewAllRecords(){
		
		return tposerviceobj.viewAllRecords();
	}
	 
	 @PostMapping("/viewSearchedRecords")// name should be same as url in backend post method 
	public ArrayList<Studentdetails> viewSearchedRecords(@RequestBody Studentdetails stdobj){
		 
		 return tposerviceobj.findByEmail(stdobj.getEmail());
		}
	 
	 @PostMapping("/AddIncomingCompany")// name should be same as url in backend post method
		public Incomingcompany AddIncomingCompany(@RequestBody Incomingcompany incobj){
		 
		 Incomingcompany objectrecivedfromservice=tposerviceobj.addNewIncomingCompany(incobj);
		 
			return objectrecivedfromservice;
		}
	 
	 @PostMapping("/AddPlacedStudent")// name should be same as url in backend post method
		public Placedstudents AddPlacedStudent(@RequestBody Placedstudents dataobj){
		 Placedstudents objectrecivedfromservice=tposerviceobj.AddPlacedStudent(dataobj);
		 
			return objectrecivedfromservice;
		}
	 
	 @PostMapping("/viewAppliedStudent")// name should be same as url in backend post method 
		public ArrayList<Appliedcompany> viewAppliedStudent(@RequestBody Appliedcompany dataobj){
			
			 return tposerviceobj.findByDepartment(dataobj.getDepartment());
			}
	 @GetMapping("/viewAppliedStudentAllRecord")
		public ArrayList<Appliedcompany> viewAppliedStudentAllRecord(){
			
			return tposerviceobj.viewAppliedStudentAllRecord();
		}
}
