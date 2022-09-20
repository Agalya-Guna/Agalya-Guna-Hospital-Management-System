import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Admin } from '../classes/admin';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  adminForm: FormGroup;
  constructor(private adminService: AdminService, private formBuilder: FormBuilder,private router:Router) {
    this.adminForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  get f() {
    return this.adminForm.controls;
  }


  ad:any;
  ngOnInit(): void {
    this.adminService.getAdminId(1).subscribe(data => {
      this.ad = data;
      console.log(this.ad);
    })
  }

  username: string;
  password: string;
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    if (this.adminForm.valid) {
      console.log(this.admin);

      if (this.ad.username == this.username && this.ad.password == this.password) {
        Swal.fire({
          title: 'Success!',
          text: 'Logged in Successfully!',
          icon: 'success', 
        }); 
        this.router.navigate(['/admin/dashboard']);
      }
      else{
        Swal.fire({
          title: 'Oops!',
          text: 'Username or Passwrod Invalid!',
          icon: 'error', 
        }); this.router.navigate(['/home']);


      }
    }

  }
  visible:boolean = false;
  changetype:boolean =true;

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


}