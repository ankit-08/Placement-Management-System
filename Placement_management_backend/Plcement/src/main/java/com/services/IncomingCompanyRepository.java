package com.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Incomingcompany;

@Repository
public interface IncomingCompanyRepository extends JpaRepository<Incomingcompany, String> {

}
