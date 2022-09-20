import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doctor } from '../classes/doctor';
import { DoctorService } from '../services/doctor.service';
import { FieldService } from '../services/field.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  doctor:Doctor=new Doctor();
  doctorForm:FormGroup;
  submitted:boolean=false;
  
  // idpattern="^[1-9]{1,5}$";
  namepattern="^[A-Z]{1}[a-z]{2,15}$";
  agepattern="^[2-9]{1}[0-9]{1}$";
  constructor(private special:FieldService,private formBuilder:FormBuilder,private doctorService:DoctorService,private router:Router,private route:ActivatedRoute) { 

    this.doctorForm=this.formBuilder.group({
      // id:new FormControl('',[Validators.required,Validators.pattern(this.idpattern)]),
      name:new FormControl('',[Validators.required,Validators.pattern(this.namepattern)]),
      age:new FormControl('',[Validators.required,Validators.pattern(this.agepattern)]),
      gender:new FormControl('',[Validators.required]),
      specialList:new FormControl('',[Validators.required])
    })
   
  }
  
  get f(){
    return this.doctorForm.controls;
   }

 id:number;
  field:any=[];
  ngOnInit(): void {
    this.field=this.special.field();
    this.id = this.route.snapshot.params['id'];

  this.doctorService.getDoctorId(this.id).subscribe(data => {
    this.doctor = data;
  });
}

  onSubmit(){
    
    console.log(this.doctor);
    this.submitted=true;

    if(this.doctorForm.valid){
      // this.api.postDoctor(this.doctor).subscribe(data => {
      //   console.log(data);
  
      // });

      console.log(this.id);
      this.doctorService.updateDoctor(this.doctor,this.id).subscribe({
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
          this.router.navigate(['/updatedoctor']);
        }
      });
  }
  }
  goBack(){
    this.router.navigate(['doctor']);
  }
}
