package com.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



//imported models and services
import com.models.Appliedcompany;
import com.models.Placedstudents;
import com.models.Studentdetails;
import com.services.StudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
	@Autowired
	private StudentService studentserviceobj;
	
    @PostMapping("/AddStudentRecord")// name should be same as url in backend post method
	public Studentdetails AddStudentRecord(@RequestBody Studentdetails stdobj){
    	Studentdetails objectrecivedfromservice=studentserviceobj.addNewRecord(stdobj);
    	
		return objectrecivedfromservice;
	}
    
    
    @PostMapping("/StudentLoginCheck")// name should be same as url in backend post method 
	public Studentdetails StudentLoginCheck(@RequestBody Studentdetails stdobj){
		
    	    	
		return studentserviceobj.checkLogin(stdobj.getEmail(), stdobj.getPassword());
	}
    
    @PostMapping("/viewplacedstudent")// name should be same as url in backend post method
   	public ArrayList<Placedstudents> viewplacedstudent(@RequestBody Placedstudents dataobj){
    	ArrayList<Placedstudents> objectrecivedfromservice=studentserviceobj.findByDepartment(dataobj);
       
   		return objectrecivedfromservice;
   	}
    
    @PostMapping("/AddAppliedCompanyRecord")// name should be same as url in backend post method
	public Appliedcompany AddAppliedCompanyRecord(@RequestBody Appliedcompany dataobj){
    	Appliedcompany objectrecivedfromservice=studentserviceobj.AddAppliedCompanyRecord(dataobj);
    	
    	
		return objectrecivedfromservice;
	}
    
}
