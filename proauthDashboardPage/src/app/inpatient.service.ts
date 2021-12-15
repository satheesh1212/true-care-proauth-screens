import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InpatientService {

  constructor(private http:HttpClient) { }

  getInpatientServiceData(){

    let inpatientServiceUrl = "http://localhost:9191/ProAuth/api/members";

    return this.http.get(inpatientServiceUrl);
  }
}