package com.mindtree.patient.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.patient.entity.Patient;
import com.mindtree.patient.exception.AlreadyExistException;
import com.mindtree.patient.exception.ResourceNotFoundException;
import com.mindtree.patient.repository.PatientRepository;

@Service
public class PatientServiceImp implements PatientService{
	
	@Autowired
	PatientRepository repo;

	@Override
	public Patient add(Patient patient) {
		Patient exist=repo.findById(patient.getId()).orElse(null);
		if(exist== null) {
			String name=patient.getName();
			if(patient.getGender().equalsIgnoreCase("Male")) {
				patient.setName("Mr. "+name);
			}else if(patient.getGender().equalsIgnoreCase("Female")) {
				patient.setName("Ms. "+name);
			}
			else {
				patient.setName("Mx. "+name);
			}
			
			repo.save(patient);
			return patient;
		}
		else {
			throw new AlreadyExistException();
		}
//		return null;
	}

	@Override
	public Patient get(int id) {
		Patient patient=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		return patient;
	}

	@Override
	public List<Patient> getDoctorId(int did) {
		List<Patient> patient=repo.findAll();
		List<Patient> plist= new ArrayList<>();
		for (Patient pt : patient) {
			if (pt.getDoctorId() == did) {
				plist.add(pt);
				}
			else {
				throw new ResourceNotFoundException();
			}
		}
			return plist;
	}

	@Override
	public List<Patient> getList() {
		List<Patient> patient=repo.findAll();
		return patient;
	}

	@Override
	public Patient update(int id,Patient patient) {
		Patient pt=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		String name=patient.getName();
		if(patient.getGender().equalsIgnoreCase("Male")) {
			patient.setName("Mr. "+name);
		}else if(patient.getGender().equalsIgnoreCase("Female")) {
			patient.setName("Ms. "+name);
		}
		else {
			patient.setName("Mx. "+name);
		}
		return repo.save(patient);
		
	}

	@Override
	public String delete(int id) {
		Patient pt=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		 repo.deleteById(id);
		 return "Deleted";
		
	}

}
