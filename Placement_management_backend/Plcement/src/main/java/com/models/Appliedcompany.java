 package com.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Appliedcompany {
	private Long slno;
	private String name ;
	private String email ;
	private String company_name ;
	private String company_id ;
	private String department ;
	private String registration_number ;
	

	
	@Id 
	@GeneratedValue
	public Long getSlno() {
		return slno;
	}
	public void setSlno(Long slno) {
		this.slno = slno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getRegistration_number() {
		return registration_number;
	}
	public void setRegistration_number(String registration_number) {
		this.registration_number = registration_number;
	}
	
	
	
	
}
