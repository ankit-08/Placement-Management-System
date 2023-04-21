package com.services;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.models.Studentdetails;

@Repository
public interface StudentDetailsRepository extends JpaRepository<Studentdetails, String>{

	ArrayList<Studentdetails> findByEmail(String email);
	
}
