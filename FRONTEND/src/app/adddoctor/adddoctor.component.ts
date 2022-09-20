import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doctor } from '../classes/doctor';
import { DoctorService } from '../services/doctor.service';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();
  doctorForm:FormGroup;
  submitted:boolean=false;
  
  idpattern="^[1-9]{1,}$";
  namepattern="^[A-Z]{1}[a-z]{2,15}$";
  agepattern="^[2-9]{1}[0-9]{1}$";
  constructor(private special:FieldService,private formBuilder:FormBuilder,private doctorService:DoctorService,private router:Router) { 

    this.doctorForm=this.formBuilder.group({
      id:new FormControl('',[Validators.required,Validators.pattern(this.idpattern)]),
      name:new FormControl('',[Validators.required,Validators.pattern(this.namepattern)]),
      age:new FormControl('',[Validators.required,Validators.pattern(this.agepattern)]),
      gender:new FormControl('',[Validators.required]),
      specialList:new FormControl('',[Validators.required])
    })
   
  }
  
  get f(){
    return this.doctorForm.controls;
   }

 
  field:any=[];
  ngOnInit(): void {
    this.field=this.special.field();
  }

  onSubmit(){
    
    console.log(this.doctor);
    this.submitted=true;

    if(this.doctorForm.valid){
      // this.api.postDoctor(this.doctor).subscribe(data => {
      //   console.log(data);
  
      // });
      this.doctorService.postDoctor(this.doctor).subscribe({
        next:(res)=>{
          Swal.fire({
            title: 'Success!',
            text: 'Doctor Detail Added Successfully!',
            icon: 'success', 
          }); this.router.navigate(['/doctor']);
          // alert("Data Added!");

        },
        error:()=>{
          // alert("The Patient Id is Already Found!");
          Swal.fire({
            title: 'Oops!',
            text: 'This Doctor Id is Already Present! Try With Other !!',
            icon: 'error', 
          }); 
          this.doctorForm.reset();
          this.router.navigate(['/doctor/add']);
        }
      });
  }
  }
}
