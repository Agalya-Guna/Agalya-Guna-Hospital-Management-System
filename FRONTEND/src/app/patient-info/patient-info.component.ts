import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patient } from '../classes/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  patient:Patient=new Patient();
  constructor(private patService:PatientService,private router:Router) { }

  id:number;
  ngOnInit(): void {
  }

  onSubmit(){
    this.id=this.patient.id;
    console.log(this.id);

    // this.patService.getPatientId(this.id).subscribe(data=>{
    //   this.patient=data;
    //   console.log(data);
    // })

    this.patService.getPatientId(this.id).subscribe({
      next:(res)=>{
        this.patient=res;
      },
      error:()=>{
        // alert("The Patient with Id:"+this.id+" is Not Found!");
        Swal.fire({
          title: 'Oops!',
          text: 'The Patient with Id is  not Found',
          icon: 'error', 
        }); this.router.navigate(['/patient/info']);
      }
    })
  }

  update(id:number){
    this.router.navigate(['updatepatient/',id]);
  }
}
