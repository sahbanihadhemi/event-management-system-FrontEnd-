import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evenemment } from '../evenemment';
import { HttpClientServiceService } from '../service/http-client-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  events : any;
  users : any;
even : Evenemment;

 public form = {
    nom:null,
    description:null,
    dateDebut:null,
    dateFin:null,
    lieu:null,
  
  
    
  }

  constructor(private httpClient:HttpClientServiceService, private http:HttpClient) { 
    this.even= new Evenemment();
  }


  ngOnInit() {
this.httpClient.sendGetRequest().subscribe(data => {
      this.events = data;
    });

    
  }

  addEvent()
   
    { 
       return this.httpClient.save(this.even).subscribe(data => console.log(data));
 
  }
 

}
