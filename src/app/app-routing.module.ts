import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MapComponent} from './map/map.component';
import { SecureInnerPagesGuard } from './secure-inner-pages.guard';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'user',component: AddUserComponent},
  // {path:'addevent',component:AddEventComponent},
  {path:'eventpage/:id',component:EventPageComponent},
  {path:'allevent',component:EventsComponent},
  // {path:'myEvents',component:MyEventsComponent},
  {path:'myEvents',component:MyEventsComponent, canActivate: [AuthGuard] },
  {path:'addevent',component:AddEventComponent,canActivate: [AuthGuard] }, 
  {path:'login',component:LoginComponent},
  {path:'map',component:MapComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
