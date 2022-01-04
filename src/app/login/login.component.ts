import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Output, EventEmitter } from '@angular/core';
import { ModalService } from '../modal.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 closebutton :any;
  /*   @Input() id: string;
    private element: any;
    username: string;
    password : string;
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;
    constructor(private modalService: ModalService, private el: ElementRef,private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService) {
        this.element = el.nativeElement;
    } */
 
 public user :any={};
public form={username: null,
  password:null}

    errorMessage:string;  
    name : string;  
    Wdate;
    annee : 0;
    IsmodelShow = false;
    
    constructor(private router:Router,private userService : AuthService,private modalService: ModalService,
   private datePipe : DatePipe,public fb: FormBuilder,  public dialogRef: MatDialogRef<LoginComponent>,private dialog: MatDialog) { 
  
   }    
    ngOnInit() {    
       this.userService.islogin = false;
       this.userService.admin = false;
       this.userService.suser = false;
       this.Wdate = this.transformDate(new Date());
       this.annee = (this.Wdate).toString().substring(0,4);
       localStorage.setItem('annee', this.annee.toString());
     
    }    
    login() {
    
      this.userService.login(this.form).subscribe(
        res =>{
        this.user = res;
          localStorage.setItem("name", this.user.username);
         
          let jwt = "Bearer " + this.user.jwt;
            localStorage.setItem("token", jwt)
         
           this.userService.islogin = true;
          if (this.user.role  == "Admin")
           {
           this.userService.admin = true;
            this.router.navigate(['/accueil']);
        }
        else
        {
          this.userService.suser = true;
          this.router.navigate(['/addevent']);
          console.log("user");
        }
            },
            error => 
            
              console.log( 'Login Incorrecte ')
           
            
            );
          }
       
          
          
          logOut() {
            localStorage.removeItem("username");
          }
   
  
  
      transformDate(date){
        return this.datePipe.transform(date, 'yyyy-MM-dd');
      }
      logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('name');
        
    }
    openRegister()
 {this.closeDialog();
   this.dialog.open(AddUserComponent, {
    width: '500px',
});; 
 }
   closeDialog()
   {
     this.dialogRef.close();
   }
  }
    