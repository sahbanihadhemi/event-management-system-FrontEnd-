import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {
constructor(
      public authService: AuthService,
      public router: Router
    ) { }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.isUserLoggedIn) {
         window.alert("You are already signed in, access denied!");
         this.router.navigate(['allevent'])
      }
      return true;
    }
  
  }