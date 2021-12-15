import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcedureAuthService {

  constructor(private http:HttpClient) { }

  getProcedureServiceAuthData(){

    let serviceProcedureAuthUrl = "http://localhost:9191/ProAuth/providerApi/providers";

    return this.http.get(serviceProcedureAuthUrl);
  }
}