import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientComponent } from './patient/patient.component';
import { ReceptionLoginComponent } from './reception-login/reception-login.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'reception/login',component:ReceptionLoginComponent},
  {path:'admin/dashboard',component:AdminDashboardComponent},
  {path:'patient/info',component:PatientInfoComponent},
  {path:'patient/add',component:AddpatientComponent},
  {path:'reception/dashboard',component:PatientDashboardComponent},
  {path:'viewpatient/:id',component:ViewPatientComponent},
  {path:'viewdoctor/:id',component:ViewDoctorComponent},
  {path:'updatepatient/:id',component:UpdatePatientComponent},
  {path:'doctor/info',component:DoctorInfoComponent},
  {path:'updatedoctor/:id',component:UpdateDoctorComponent},
  {path:'doctor/add',component:AdddoctorComponent},
  {path:'doctor/dashboard',component:DoctorDashboardComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'patient',component:PatientComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
