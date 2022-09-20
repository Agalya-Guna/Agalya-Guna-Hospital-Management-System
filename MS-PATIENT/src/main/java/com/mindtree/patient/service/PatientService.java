package com.mindtree.patient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mindtree.patient.entity.Patient;

@Service
public interface PatientService {
	
	public Patient add(Patient patient);

	public Patient get(int id);
	
	public List<Patient> getDoctorId(int did);
	
	public List<Patient> getList();
	
	public Patient update(int id,Patient patient);
	
	public String delete(int id);
	

}
