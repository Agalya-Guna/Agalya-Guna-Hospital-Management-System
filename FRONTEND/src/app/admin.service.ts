import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {  }

  getAdminId(id:number){
    return this.http.get<any>("http://localhost:9000/admin/id/"+id);
  }
}
