import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // BASE_PATH: 'http://localhost:8080'

   public username: String;
   public password: String;
   private baseUrl = '/api/users/register';
   private baseUrl1 = '/api/users/login';
   public dataForm:  FormGroup; 
   islogin = false;
   admin = false;
   suser = false;
   choixmenu : string  = 'A';
   private REST_API_SERVER = "http://localhost:8087";

   constructor(private http: HttpClient) {
 
   }

   login(form) {
    return this.http.post(this.REST_API_SERVER + "/api/users/login",form);
  }  
  register(form) {
    return this.http.post(this.REST_API_SERVER + "/api/users/register",form);
  }  
 

  createData(info: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, info);
  }
 
 
   isUserLoggedIn() {
     
     return this.islogin;
   }
 


 }