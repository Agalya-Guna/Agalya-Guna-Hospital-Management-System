import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../classes/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  id!:number;
  patient:Patient=new Patient();

  constructor(private route:ActivatedRoute,private service:PatientService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.patient=new Patient();
    this.service.getPatientId(this.id).subscribe(data=>
      {
        this.patient=data;
      });
  }
  openPage() {
    this.router.navigate(['/patient']);
    }
}
