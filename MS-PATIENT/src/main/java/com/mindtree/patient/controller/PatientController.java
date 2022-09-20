package com.mindtree.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.mindtree.patient.entity.Patient;
import com.mindtree.patient.exception.AlreadyExistException;
import com.mindtree.patient.exception.ResourceNotFoundException;
import com.mindtree.patient.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {
	@Autowired
	PatientService service;
	
	@PostMapping("/add")
	public ResponseEntity<Patient> add(@RequestBody Patient patient){
	
			Patient pt=service.add(patient);
			return new ResponseEntity<Patient>(pt,HttpStatus.OK);
	
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Patient> get(@PathVariable(value="id") int id){
				Patient pt=service.get(id);
			return new ResponseEntity<Patient>(pt,HttpStatus.OK);

	}

	@GetMapping("/did/{did}")
	public ResponseEntity<List<Patient>> getDid(@PathVariable(value="did") int did){
			List<Patient> pt=service.getDoctorId(did);
			return new ResponseEntity<List<Patient>>(pt,HttpStatus.OK);
	}
	
	
	@GetMapping("/list")
	public ResponseEntity <List<Patient>> getList(){
			List<Patient> pt=service.getList();
			return new ResponseEntity<List<Patient>>(pt,HttpStatus.OK);
       
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Patient> update(@PathVariable(value="id") int id,@RequestBody Patient patient){
		
			Patient pt=service.update(id,patient);
			return new ResponseEntity<Patient>(pt,HttpStatus.OK);
		
		
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable(value="id") int id){

			service.delete(id);
			return new ResponseEntity<String>("Deleted",HttpStatus.OK);
		
	}
}
	
