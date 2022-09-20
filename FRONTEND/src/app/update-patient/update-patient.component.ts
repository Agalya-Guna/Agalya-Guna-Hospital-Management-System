
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Doctor } from '../classes/doctor';
import { Patient } from '../classes/patient';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctor: Doctor =new Doctor();
  namepattern = "^[A-Z]{1}[a-z]{2,15}$";
  agepattern = "^[2-9]{1}[0-9]{1}$";
  submitted: boolean = false;

  model: NgbDateStruct;
  patientForm!: FormGroup;
  constructor(private docservice: DoctorService, private patService: PatientService, private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute) {
    this.patientForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      age: new FormControl('', [Validators.required, Validators.pattern(this.agepattern)]),
      gender: new FormControl('', [Validators.required]),
      visitedDoctor: new FormControl('', [Validators.required]),
      dateOfVisit: new FormControl('', [Validators.required]),
      prescription: new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.patientForm.controls;
  }

 

  // doctors:any=[];
  id!: number;
  doc: Doctor[] = [];
  ngOnInit(): void {
    this.docservice.getDoctorList().subscribe(data => {
      this.doc = data;

    });

    this.id = this.route.snapshot.params['id'];

  this.patService.getPatientId(this.id).subscribe(data => {
    this.patient = data;
  });

  this.docservice.getDoctorList().subscribe(data => {
    this.doc = data;});
   
  }
  date = new Date();
// date:string;
  onSubmit() {

    this.submitted = true;
    console.log(this.patient);
    // this.patient.dateOfVisit = this.datePipe.transform(this.date, "dd/MM/yyyy");
    var x: number = +this.patient.visitedDoctor;
    this.patient.doctorId = x;

    for (var d = 0; d < this.doc.length; d++) {
      if (this.doc[d].id == x) {
        this.patient.visitedDoctor = this.doc[d].name;
        this.doctor = this.doc[d];
        break;
      }
    }

    if (this.patientForm.valid) {
      this.patService.updatePatient(this.id,this.patient).subscribe( data =>{
          Swal.fire({
            title: 'Success!',
            text: 'Patient Details Updated Successfully!',
            icon: 'success', 
          }); 
          this.patient=data;
          console.log(this.patient);
          this.router.navigate(['/patient/info']);
       
      }
      );
     
    }
  }

  goBack(){
    this.router.navigate(['patient/info']);
  }
}

