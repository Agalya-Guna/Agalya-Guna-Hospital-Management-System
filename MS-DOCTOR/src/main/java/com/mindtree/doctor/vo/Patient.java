package com.mindtree.doctor.vo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Patient")
public class Patient {

	@Id
	@GeneratedValue()
	private int id;
	private String name;
	private int age;
	private String gender;
	private String visitedDoctor;
	private String prescription;
	private String dateOfVisit;
	private int doctorId;
}
