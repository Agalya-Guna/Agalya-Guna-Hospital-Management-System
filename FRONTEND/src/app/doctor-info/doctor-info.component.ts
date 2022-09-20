import { Component, OnInit } from '@angular/core';
import { Doctor } from '../classes/doctor';
import { Patient } from '../classes/patient';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
  constructor(private docservice:DoctorService) { }

  doc: Doctor[] = [];
  doctor:Doctor=new Doctor();
  ngOnInit(): void {
    this.name="Select Doctor";
    this.docservice.getDoctorList().subscribe(data => {
      this.doc = data;

    });
  }

  name:string;
 
  onSelect(event:any){
    this.name=event.target.value
    var x: number = +this.name;
    this.doctor.id = x;

    this.docservice.getDoctorId(x).subscribe(data=>{
      this.doctor=data;
      console.log(data);
    })
  }
}
