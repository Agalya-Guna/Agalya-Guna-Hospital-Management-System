package com.mindtree.patient.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.mindtree.patient.exception.AlreadyExistException;
import com.mindtree.patient.exception.ResourceNotFoundException;

@ControllerAdvice
public class ExHandler {

	@ExceptionHandler(value=AlreadyExistException.class)
	public ResponseEntity<Object> exception(AlreadyExistException e){
		return new ResponseEntity<>("Id Already Exist",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value=ResourceNotFoundException.class)
	public ResponseEntity<Object> exception(ResourceNotFoundException e){
		return new ResponseEntity<>("Id Not Found",HttpStatus.NOT_FOUND);
	}
	
}
