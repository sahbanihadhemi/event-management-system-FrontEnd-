import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(
    public authService: AuthService,
    public router: Router, public dialog: MatDialog
  ){ }
 
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isUserLoggedIn() !== true) {
      window.alert('Access Denied, Login is Required to Access This Page!')
    this.dialog.open(LoginComponent, {
        width: '500px',
    });; 
    } 
    return true; 
  }

}