package com.mindtree.admin.entity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.admin.entity.Admin;
import com.mindtree.admin.repository.AdminRepository;
@Service
public class AdminServiceImp implements AdminService{

	@Autowired
	AdminRepository repo;  
	@Override
	public Admin getId(int id) {
		Admin ad=repo.findById(id).get();
		return ad;
	}

	@Override
	public Admin add(Admin ad) {
		repo.save(ad);
		return ad;
	}

}
