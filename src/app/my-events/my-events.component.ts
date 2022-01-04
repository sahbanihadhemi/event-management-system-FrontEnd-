import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evenemment } from '../evenemment';
import { HttpClientServiceService } from '../service/http-client-service.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  events : Evenemment[];
  users : any;
even : Evenemment
searchValue:String;
activeElement
  constructor(private httpClient:HttpClientServiceService, private http:HttpClient) { 
    this.even= new Evenemment();
  }


  ngOnInit(): void { this.httpClient.getParticipedInEvents().subscribe((data : Evenemment[]) => {
    this.events = data;
  });
   }

  // ide of authentificated user
  myEvents()
  {
    this.httpClient.getMyEvent().subscribe((data : Evenemment[]) => {
      this.events = data;
    });
  }
 participedInEvents()
 { this.httpClient.getParticipedInEvents().subscribe((data : Evenemment[]) => {
  this.events = data;
});
 }

}
