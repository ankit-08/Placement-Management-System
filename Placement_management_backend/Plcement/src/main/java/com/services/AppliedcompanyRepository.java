 package com.services;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Appliedcompany;


@Repository
public interface AppliedcompanyRepository extends JpaRepository<Appliedcompany, String> {

	
	ArrayList<Appliedcompany> findByDepartment(String department);
}
