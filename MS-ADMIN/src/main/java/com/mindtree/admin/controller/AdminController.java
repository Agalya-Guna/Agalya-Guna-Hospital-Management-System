package com.mindtree.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.admin.entity.Admin;
import com.mindtree.admin.entity.service.AdminServiceImp;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminServiceImp service;
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Admin> get(@PathVariable(value="id") int id){
		Admin ad=service.getId(id);
		return new ResponseEntity<Admin>(ad,HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Admin> add(@RequestBody Admin admin){
		Admin ad=service.add(admin);
		return new ResponseEntity<Admin>(ad,HttpStatus.OK);
	}

}
