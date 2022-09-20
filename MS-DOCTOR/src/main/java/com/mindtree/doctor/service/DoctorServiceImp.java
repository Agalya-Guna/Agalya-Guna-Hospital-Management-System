package com.mindtree.doctor.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mindtree.doctor.entity.Doctor;
import com.mindtree.doctor.exception.ResourceNotFoundException;
import com.mindtree.doctor.repository.DoctorRepository;
import com.mindtree.doctor.vo.DoctorVO;
import com.mindtree.doctor.vo.Patient;

@Service
public class DoctorServiceImp implements DoctorService{
	@Autowired
	DoctorRepository repo;
	
	@Autowired
	RestTemplate restTemp;

	@Override
	public Doctor add(Doctor doctor) {
		Doctor exist=repo.findById(doctor.getId()).orElse(null);
		if(exist== null) {
			doctor.setNoOfPatients(0);
			doctor.setName("Dr. "+doctor.getName());
			repo.save(doctor);
			return doctor;
		}
		else {
			throw new com.mindtree.doctor.exception.AlreadyExistException();
		}
	}


	@Override
	public Doctor get(int id) {
		Doctor doctor=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		return doctor;
	}

	@Override
	public List<Doctor> getlist() {
		List<Doctor> doctor=repo.findAll();
		return doctor;
	}

	@Override
	public Doctor update(int id,Doctor doctor) {
		Doctor doct=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		doct.setId(doctor.getId());
		doctor.setName("Dr. "+doctor.getName());
		doct.setAge(doctor.getAge());
		doct.setGender(doctor.getGender());
		doct.setNoOfPatients(doctor.getNoOfPatients());
		doct.setSpecialList(doctor.getSpecialList());
		return repo.save(doct);
	}

	@Override
	public String delete(int id) {
		Doctor doctor=repo.findById(id).orElseThrow(()->new ResourceNotFoundException());
		 repo.deleteById(id);
		 return "Deleted";
	}

	@Override
	public List<DoctorVO> getPatientList(int id) {
		List<DoctorVO> fulllist = this.getlist().stream().filter(p->p.getId()==id).map(p->{
			Doctor doc=p;
			List<Patient> plist=Arrays.asList(restTemp.getForEntity("http://PATIENT-SERVICE/patient/did/"+id, Patient[].class)
					.getBody());
			doc.setNoOfPatients(plist.size());
			return new DoctorVO(doc,plist);
		}).collect(Collectors.toList());
		return null;
	}


}
