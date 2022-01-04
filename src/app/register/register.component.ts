import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public crudApi: AuthService ,public fb: FormBuilder,private router : Router) { }

  ngOnInit(): void {
  
   
    this.infoForm();
   }

  
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        username: ['', [Validators.required, Validators.minLength(5)]],
        role: ['', [Validators.required, Validators.minLength(8)]],
        email: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        pwdd: ['', [Validators.required, Validators.minLength(8)]],
        });
    }
   
  

  ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    const val = this.crudApi.dataForm.value;
    if (val.password == val.pwdd)
    {
      
        this.addData();
    
    }
}
  
   

addData() {
  this.crudApi.createData(this.crudApi.dataForm.value).
  subscribe( data => {
    this.router.navigate(['/allEvents']);
  });
}
 

}
