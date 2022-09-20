package com.mindtree.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mindtree.patient.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

}
