import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';
import { AuthService } from '../service/auth.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html', 
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private userService : AuthService,
    private datePipe : DatePipe,public fb: FormBuilder ,private modalService: ModalService,private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {

  }
 openLogin()
 {
  this.dialog.open(LoginComponent, {
    width: '500px',
});; 
 }

 openRegister()
 {this.dialog.open(AddUserComponent, {
    width: '500px',
});; 
 }

}
