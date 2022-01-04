import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { FilterSearchPipe } from './filter-search.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { MyEventsComponent } from './my-events/my-events.component';
import { MapComponent } from './map/map.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth.guard';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { DatePipe } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NominatimService } from './service/nominatim.service';
import { GeoComponent } from './geo/geo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider'; */
/* import {AgmCoreModule} from '@agm/core';
 */
@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    AddEventComponent,
    AddUserComponent,
    NavComponent,
    EventsComponent,
    
    FilterSearchPipe,
    LoginComponent,
    RegisterComponent,

     MyEventsComponent,
     MapComponent,
     GeoComponent,
    
  
 
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  MatDialogModule,
  BrowserAnimationsModule,
   /*  
    MatSliderModule,
    BrowserAnimationsModule, */
    MDBBootstrapModule.forRoot()
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
    ,
    DatePipe, 
    AuthGuard,
    SecureInnerPagesGuard,
    NominatimService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
