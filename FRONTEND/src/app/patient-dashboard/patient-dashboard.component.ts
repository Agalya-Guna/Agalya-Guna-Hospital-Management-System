import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openAdd(){
    this.router.navigate(['/patient/add']);
  }
  openView(){
    this.router.navigate(['/patient/info']);
  }
  openDoctor(){
    this.router.navigate(['/doctor/info']);
  }
}
