package com.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Placedstudents;
import java.util.ArrayList;

@Repository
public interface PlacedstudentRepository extends JpaRepository<Placedstudents, String>{
	
	ArrayList<Placedstudents> findByDepartment(String department);
	
}
