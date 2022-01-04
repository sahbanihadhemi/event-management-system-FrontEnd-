import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evenemment } from '../evenemment';
import { HttpClientServiceService } from '../service/http-client-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events : Evenemment[];
  users : any;
even : Evenemment
searchValue:String;
  constructor(private httpClient:HttpClientServiceService, private http:HttpClient) { 
    this.even= new Evenemment();
  }


  ngOnInit() {
this.httpClient.sendGetRequest().subscribe((data : Evenemment[]) => {
      this.events = data;
    });
  }
allUser()
{
  this.httpClient.allUser().subscribe(data => {
    this.users = data;
  });
}
  
  addEvent()
   
    { 
       return this.httpClient.save(this.even).subscribe(data => console.log(data));
 
     
  }
  delete(e)
  
{
  return this.httpClient.deleteEvent(e.idEvents).subscribe(data => console.log(data));
}
deleteUser(u)
  
{
  return this.httpClient.deleteEvent(u.id).subscribe(data => console.log(data));
}
}
