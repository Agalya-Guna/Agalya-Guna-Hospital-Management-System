import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../classes/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) {  }

  postPatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>("http://localhost:9000/patient/add",patient);
  }

  getPatientId(id:number){
    return this.http.get<any>("http://localhost:9000/patient/id/"+id);
   
  }

  getPatientList(){
    return this.http.get<Patient[]>("http://localhost:9000/patient/list");
  }
  // updatePatient(id: number, patient:Patient): Observable<Object>{
  //   return this.http.put<Patient>("http://localhost:9000/patient/update/"+id, patient);
  // }

  deletePatient(id:number){
    return this.http.delete("http://localhost:9000/patient/delete/"+id);
  }

  updatePatient(id:number,patient:Patient){
    return this.http.put<any>("http://localhost:9000/patient/update/"+id,patient);
  }


}
