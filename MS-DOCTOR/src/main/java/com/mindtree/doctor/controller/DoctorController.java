package com.mindtree.doctor.controller;

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

import com.mindtree.doctor.entity.Doctor;
import com.mindtree.doctor.service.DoctorService;
import com.mindtree.doctor.vo.DoctorVO;


@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	DoctorService service;
	
	@PostMapping("/add")
	public ResponseEntity<Doctor> add(@RequestBody Doctor patient){
			Doctor doc=service.add(patient);
			return new ResponseEntity<Doctor>(doc,HttpStatus.OK);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Doctor> get(@PathVariable(value="id") int id){
		
			Doctor doc=service.get(id);
			return new ResponseEntity<Doctor>(doc,HttpStatus.OK);
	}
	
	@GetMapping("/docpt/{id}")
	public  ResponseEntity <List<DoctorVO>> getPatientSize(@PathVariable(value="id") int id){
		
		List<DoctorVO> vo=service.getPatientList(id);
		return new ResponseEntity<List<DoctorVO>>(vo,HttpStatus.OK);
	}
	
	@GetMapping("/list")
	public ResponseEntity <List<Doctor>> getList(){
        
			List<Doctor> pt=service.getlist();
			return new ResponseEntity<List<Doctor>>(pt,HttpStatus.OK);
        
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Doctor> update(@PathVariable(value="id") int id,@RequestBody Doctor doctor){
	
		Doctor doc=service.update(id,doctor);
			return new ResponseEntity<Doctor>(doc,HttpStatus.OK);
		
		
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable(value="id") int id){
		
			service.delete(id);
			return new ResponseEntity<String>("Deleted",HttpStatus.OK);
		
	}
	
}
