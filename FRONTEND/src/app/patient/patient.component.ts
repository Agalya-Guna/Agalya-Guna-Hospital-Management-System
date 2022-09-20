import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Patient } from '../classes/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'age', 'gender', 'visitedDoctor','dateOfVisit','prescription','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:PatientService,private router:Router) { }

  ngOnInit(): void {
     this.getAllPatient();
  }

  openDialog() {
   this.router.navigate(['/patient/add']);
   }

  getAllPatient(){
    this.service.getPatientList().subscribe({
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

viewPatient(id:number){
  console.log(id);
  this.router.navigate(['viewpatient',id]);
}
updatePatient(id:number){
  this.router.navigate(['updatepatient/',id]);
}
goBack(){
  this.router.navigate(['/admin/dashboard']);
}
 
  }



