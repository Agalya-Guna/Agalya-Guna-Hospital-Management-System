package com.mindtree.doctor.vo;

import java.util.List;

import com.mindtree.doctor.entity.Doctor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorVO {	
		private Doctor college;
		private List<Patient> student;

	
	
}
