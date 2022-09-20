import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){}
  openAdmin(){
    this.router.navigate(['/admin/login']);
  }
  openReception(){
    this.router.navigate(['/reception/login']);
  }
 

  ngOnInit(): void {
  }

}
