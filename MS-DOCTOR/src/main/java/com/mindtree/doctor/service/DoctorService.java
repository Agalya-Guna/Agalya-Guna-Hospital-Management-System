package com.mindtree.doctor.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mindtree.doctor.entity.Doctor;
import com.mindtree.doctor.vo.DoctorVO;
@Service
public interface DoctorService {
	
	public Doctor add(Doctor doctor);
	
	public Doctor get(int id);
	
	public List<Doctor> getlist();
	
	public Doctor update(int id,Doctor doctor);
	
	public String delete(int id);
	
	public List<DoctorVO> getPatientList(int id);
	

}
