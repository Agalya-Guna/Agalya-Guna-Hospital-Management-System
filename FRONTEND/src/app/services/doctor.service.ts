import { Injectable } from '@angular/core';
import { Doctor } from '../classes/doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) {  }

  postDoctor(doctor:Doctor):Observable<Doctor>{
    return this.http.post<any>("http://localhost:9000/doctor/add",doctor);
  }

  getDoctorList(){
    return this.http.get<any>("http://localhost:9000/doctor/list");
  }

  doctors(){
    return [this.getDoctorList()];
  }

  getDoctorId(id:number){
    return this.http.get<any>("http://localhost:9000/doctor/id/"+id);
  }

  updateDoctor(data:Doctor,id:number):Observable<Doctor>{
    return this.http.put<any>(" http://localhost:9000/doctor/update/"+id,data);
  }
}
