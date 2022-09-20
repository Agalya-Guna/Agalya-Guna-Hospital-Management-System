import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../classes/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  id!:number;
  doctor:Doctor=new Doctor();

  constructor(private route:ActivatedRoute,private service:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.doctor=new Doctor();
    this.service.getDoctorId(this.id).subscribe(data=>
      {
        this.doctor=data;
      });
  }
  openPage() {
    this.router.navigate(['/doctor']);
    }

}
