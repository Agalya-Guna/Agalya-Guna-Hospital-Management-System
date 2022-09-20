import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import Swal from 'sweetalert2';
import { Doctor } from '../classes/doctor';
import { Patient } from '../classes/patient';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  patient: Patient = new Patient();

  idpattern = "^[1-9]{1,}$";
  namepattern = "^[A-Z]{1}[a-z]{2,15}$";
  agepattern = "^[1-9]{1}[0-9]{1}$";
  submitted: boolean = false;

  model: NgbDateStruct;
  patientForm!: FormGroup;
  constructor(private docservice: DoctorService, public datePipe: DatePipe, private patService: PatientService, private formBuilder: FormBuilder,private router:Router) {
    this.patientForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required, Validators.pattern(this.idpattern)]),
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

  doc: Doctor[] = [];
  doctor: Doctor = new Doctor();

  // doctors:any=[];
  ngOnInit(): void {
    this.patient.visitedDoctor="Select Doctor";
    this.docservice.getDoctorList().subscribe(data => {
      this.doc = data;

    });
  }
  date = new Date();
// date:string;
  onSubmit() {

    this.submitted = true;

    if (this.patientForm.valid) {
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

      this.doctor.noOfPatients += 1;
      this.docservice.updateDoctor(this.doctor, x).subscribe(data => {
        console.log(data);
      })
      this.patService.postPatient(this.patient).subscribe({
        next:(res)=>{
          Swal.fire({
            title: 'Success!',
            text: 'Patient Detail Added Successfully!',
            icon: 'success', 
          }); 
          this.router.navigate(['/patient/info']);
          // alert("Data Added!");

        },
        error:()=>{
          // alert("The Patient Id is Already Found!");
          console.log(this.patient);
          Swal.fire({
            title: 'Oops!',
            text: 'This Patient Id is Already Present! Try With Other !!',
            icon: 'error', 
          }); 
          this.patientForm.reset();
            this.router.navigate(['/patient/add']);
        }
      })

    }
  }
}
