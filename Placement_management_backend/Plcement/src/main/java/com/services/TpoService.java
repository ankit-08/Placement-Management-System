package com.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.models.Studentdetails;
import com.models.Incomingcompany;
import com.models.Placedstudents;
import com.models.Appliedcompany;

@Service
public class TpoService {
	
		@Autowired
		StudentDetailsRepository stddetailsrepo;
		
		@Autowired
		IncomingCompanyRepository incomingcompanyrepo;
		
		@Autowired
		PlacedstudentRepository placedstudentrepo;
		
		@Autowired
		AppliedcompanyRepository appliedcompanyrepo;
		
		public ArrayList<Studentdetails> viewAllRecords() {
		
			ArrayList<Studentdetails> allstudentdetails=new ArrayList<Studentdetails>(); 
			//After we save return the object which is saved
			stddetailsrepo.findAll().forEach(allstudentdetails::add);
			return allstudentdetails;
		
		
		}
		
		public ArrayList<Studentdetails> findByEmail(String email){
			
			ArrayList<Studentdetails> searcheddetails= stddetailsrepo.findByEmail(email);
			if(searcheddetails.size()>0)
				return searcheddetails;
			else
				return null;
		}
		
		public Incomingcompany addNewIncomingCompany(Incomingcompany incobj) {
			
			//After we save return the object which is saved
			Incomingcompany savedobj=incomingcompanyrepo.save(incobj);
			return savedobj;	
		}
		
		public Placedstudents AddPlacedStudent(Placedstudents dataobj) {
			
			//After we save return the object which is saved
			Placedstudents savedobj=placedstudentrepo.save(dataobj);
			return savedobj;	
		}
		
		public ArrayList<Appliedcompany> findByDepartment(String departmennt){
					
					ArrayList<Appliedcompany> searcheddetails= appliedcompanyrepo.findByDepartment(departmennt);					
					if(searcheddetails.size()>0)
						return searcheddetails;
					else
						return null;
				}
		public ArrayList<Appliedcompany> viewAppliedStudentAllRecord() {
			
			ArrayList<Appliedcompany> allaappiledstudentsrecord=new ArrayList<Appliedcompany>(); 
			//After we save return the object which is saved
			appliedcompanyrepo.findAll().forEach(allaappiledstudentsrecord::add);
			return allaappiledstudentsrecord;
		
		
		}
		
}
