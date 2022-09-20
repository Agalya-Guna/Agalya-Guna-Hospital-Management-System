import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDashboardComponent } from '../doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from '../patient-dashboard/patient-dashboard.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openPatient(){
    this.router.navigate(['/patient']);
  }
  openDoctor(){
    this.router.navigate(['/doctor']);
  }
}
