package com.mindtree.patient.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mindtree.patient.entity.Patient;
import com.mindtree.patient.service.PatientService;

@SpringBootTest(classes= {PatientControllerTest.class})
class PatientControllerTest {

	@Mock
	PatientService  service;
	
	@InjectMocks
	PatientController controller;
	
	List<Patient> plist;
	Patient patient;
	
	@Test
	void testShouldAdd() {
		patient=new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1);
		when(service.add(patient)).thenReturn(patient);
		ResponseEntity<Patient> res=(ResponseEntity<Patient>) controller.add(patient);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(patient,res.getBody());
	}
	
	@Test
	void testShouldGetPatient()  {
		patient=new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1);
		when(service.get(1)).thenReturn(patient);
		ResponseEntity<Patient> res=(ResponseEntity<Patient>) controller.get(1);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(patient,res.getBody());
	}
	
	@Test
	void testShouldGetPatientByDid()  {
		plist=new ArrayList<>();
		plist.add(new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1));
		plist.add(new Patient(1,"Ms. Sri",28,"Female","Dr. Pradap","Fever","10-12-2021",1));
		int did=1;
		when(service.getDoctorId(did)).thenReturn(plist);
		ResponseEntity<List<Patient>> res=controller.getDid(did);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(2,res.getBody().size());
	}
	
	@Test
	void testShouldGetPatientList() {
		plist=new ArrayList<>();
		plist.add(new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1));
		plist.add(new Patient(1,"Ms. Sri",28,"Female","Dr. Pradap","Fever","10-12-2021",1));
		when(service.getList()).thenReturn(plist);
		ResponseEntity<List<Patient>> res=(ResponseEntity<List<Patient>>) controller.getList();
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(2,res.getBody().size());
	}
	
	@Test
	void testShouldUpdatePatient(){
		patient=new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1);
		int id=1;
		when(service.get(id)).thenReturn(patient);
		when(service.update(id,patient)).thenReturn(patient);
		ResponseEntity<Patient> res=(ResponseEntity<Patient>) controller.update(id,patient);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(id,res.getBody().getId());
		assertEquals(patient,res.getBody());	
	}

	@Test
	void testDeletePatient() {
		patient=new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1);
		int id=1;
		when(service.get(id)).thenReturn(patient);
		when(service.delete(id)).thenReturn("Deleted");
		ResponseEntity<String> res=(ResponseEntity<String>) controller.delete(id);
		ResponseEntity<Patient> re=(ResponseEntity<Patient>) controller.get(id);
		assertEquals(HttpStatus.OK,re.getStatusCode());
		assertEquals(id,re.getBody().getId());
		assertEquals("Deleted",res.getBody());	
	}
}
