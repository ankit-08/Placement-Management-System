package com.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.models.Studentdetails;
import com.models.Placedstudents;
import com.models.Appliedcompany;

@Service
public class StudentService {

	@Autowired
	StudentDetailsRepository stddetailsrepo;
	
	@Autowired
	PlacedstudentRepository placedstudentrepo;
	
	@Autowired
	AppliedcompanyRepository applycompanyrepo;
	
	public Studentdetails addNewRecord(Studentdetails stdobj) {
		
		//After we save return the object which is saved
		
		Studentdetails savedobj=stddetailsrepo.save(stdobj);
		
		return savedobj;	
	}
	
	public Studentdetails checkLogin(String email, String password){
		
		ArrayList<Studentdetails> searcheddetails= stddetailsrepo.findByEmail(email);
	
		if(searcheddetails.size()>0) {
		
			if(searcheddetails.get(0).getPassword().equals(password))
			{
		
				return searcheddetails.get(0);
			}
			else
				return null;
			
			}
		else
			return null;
	}
	
	public ArrayList<Placedstudents> findByDepartment(Placedstudents dataobj){
		
		ArrayList<Placedstudents> searcheddetails= placedstudentrepo.findByDepartment(dataobj.getDepartment());
		
		if(searcheddetails.size()>0)
			return searcheddetails;
		else
			return null;
	}
	
public Appliedcompany AddAppliedCompanyRecord(Appliedcompany dataobj) {
		
		//After we save return the object which is saved
		
	Appliedcompany savedobj=applycompanyrepo.save(dataobj);
		
		return savedobj;	
	}
	
}
