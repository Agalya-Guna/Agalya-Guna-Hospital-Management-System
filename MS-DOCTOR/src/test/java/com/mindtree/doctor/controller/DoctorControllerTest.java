package com.mindtree.doctor.controller;

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

import com.mindtree.doctor.entity.Doctor;
import com.mindtree.doctor.exception.ResourceNotFoundException;
import com.mindtree.doctor.service.DoctorService;
import com.mindtree.doctor.vo.DoctorVO;
import com.mindtree.doctor.vo.Patient;
@SpringBootTest(classes= {DoctorControllerTest.class})
class DoctorControllerTest {
	@Mock
	DoctorService service;
	
	@InjectMocks
	DoctorController controller;
	
	List<Doctor> dlist;
	List<Patient> plist;
	Doctor doctor;
	

	@Test
	void testShouldAdd() {
		doctor=new Doctor(2,"Priya",23,"Female","Heart",2);
		when(service.add(doctor)).thenReturn(doctor);
		ResponseEntity<Doctor> res=(ResponseEntity<Doctor>) controller.add(doctor);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(doctor,res.getBody());
	}
	
	@Test
	void testShouldGetDoctor()  {
		doctor=new Doctor(2,"Priya",23,"Female","Heart",2);
		when(service.get(2)).thenReturn(doctor);
		ResponseEntity<Doctor> res=(ResponseEntity<Doctor>) controller.get(2);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(doctor,res.getBody());
//		assertThrows(ResourceNotFoundException.class, ()->controller.get(1),"Id Not Found");
	}
	
	@Test
	void testShouldGetDoctorList() {
		dlist=new ArrayList<>();
		dlist.add(new Doctor(1,"Priya",28,"Female","Heart",2));
		dlist.add(new Doctor(2,"Sheriya",27,"Female","Heart",2));
		dlist.add(new Doctor(3,"Pranav",26,"Male","Heart",2));
		when(service.getlist()).thenReturn(dlist);
		ResponseEntity<List<Doctor>> res=(ResponseEntity<List<Doctor>>) controller.getList();
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(3,res.getBody().size());
	}
	
	@Test
	void testShouldGetDoctorVO() {
		doctor=new Doctor(1,"Dr. Shanthi",28,"Female","Heart",2);
		int id=1;
		when(service.get(id)).thenReturn(doctor).thenReturn(doctor);
		ResponseEntity<Doctor> re=(ResponseEntity<Doctor>) controller.get(id);
		assertEquals(id,re.getBody().getId());
		
		plist=new ArrayList<>();
		plist.add(new Patient(1,"Ms. Priya",28,"Female","Dr. Pradap","Fever","12-12-2021",1));
		plist.add(new Patient(2,"Mr. Parthi",28,"Male","Dr. Pradap","Fever","10-12-2021",1));
		when(service.getPatientList(id )).thenReturn(null);
		ResponseEntity<List<DoctorVO>> res=(ResponseEntity<List<DoctorVO>>) controller.getPatientSize(id);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(null,res.getBody());
		
	}
	
	@Test
	void testShouldUpdateDoctor(){
		doctor=new Doctor(1,"Priya",28,"Female","Heart",2);
		int id=1;
		when(service.get(id)).thenReturn(doctor);
		when(service.update(id,doctor)).thenReturn(doctor);
		ResponseEntity<Doctor> res=(ResponseEntity<Doctor>) controller.update(id,doctor);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		assertEquals(id,res.getBody().getId());
		assertEquals(doctor,res.getBody());	
	}

	@Test
	void testDeleteDoctor() {
		doctor=new Doctor(1,"Priya",28,"Female","Heart",2);
		int id=1;
		when(service.get(id)).thenReturn(doctor);
		when(service.delete(id)).thenReturn("Deleted");
		ResponseEntity<String> res=(ResponseEntity<String>) controller.delete(id);
		ResponseEntity<Doctor> re=(ResponseEntity<Doctor>) controller.get(id);
		assertEquals(HttpStatus.OK,re.getStatusCode());
		assertEquals(id,re.getBody().getId());
		assertEquals("Deleted",res.getBody());	
	}
}
