import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
  constructor(private router:Router ){}
  openAdmin() {
    this.router.navigate(['/admin/login']);
    }
    openReception() {
      this.router.navigate(['/reception/login']);
      }
  
}
