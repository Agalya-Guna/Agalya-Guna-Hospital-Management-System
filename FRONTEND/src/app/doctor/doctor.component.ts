import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Doctor } from '../classes/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'age', 'gender', 'specialList','noOfPatients','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {
     this.getAllDoctors();
  }

  openDialog() {
   this.router.navigate(['/doctor/add']);
   }

  getAllDoctors(){
    this.doctorService.getDoctorList().subscribe({
next:(res)=>{
// console.log(res);
this.dataSource=new MatTableDataSource(res);
this.dataSource.  paginator=this.paginator;
this.dataSource.sort=this.sort;
}
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
viewDoctor(id:number){
  // console.log(id);
  this.router.navigate(['viewdoctor',id]);
}
updateDoctor(id:number){
  this.router.navigate(['updatedoctor/',id]);
}
goBack(){
  this.router.navigate(['/admin/dashboard']);
}

}
