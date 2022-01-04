import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public user ={
    nom:null,
    prenom:null,
    password:null,
    email:null,
    telephone:null,
    username:null,
    role:"USER"
  }
  constructor(private router:Router,private userService : AuthService,private modalService: ModalService,
    private datePipe : DatePipe,public fb: FormBuilder,  public dialogRef: MatDialogRef<AddUserComponent>) { 
   
    }
  ngOnInit(): void {
  }

  registerUser()
  {return this.userService.register(this.user).subscribe(data => console.log(data));}
  closeDialog()
   {
     this.dialogRef.close();
   }
}
