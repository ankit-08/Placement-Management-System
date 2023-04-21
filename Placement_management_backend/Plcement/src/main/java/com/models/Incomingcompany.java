package com.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Incomingcompany {
    private String company_id ;
    private String company_name;
    private String company_address ;
    private String Job_loaction ;
    private String ctc ;
	private String requirement;
	private String date;
	
	@Id
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getCompany_address() {
		return company_address;
	}
	public void setCompany_address(String company_address) {
		this.company_address = company_address;
	}
	public String getJob_loaction() {
		return Job_loaction;
	}
	public void setJob_loaction(String job_loaction) {
		Job_loaction = job_loaction;
	}
	public String getCtc() {
		return ctc;
	}
	public void setCtc(String ctc) {
		this.ctc = ctc;
	}
	public String getRequirement() {
		return requirement;
	}
	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

}
