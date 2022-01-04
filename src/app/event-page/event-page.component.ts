import { Component, OnInit , ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceService } from '../service/http-client-service.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;



@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
alert:boolean=false;
  event :any; 
  sponsor:any;
public formEmail ={
  fromEmail : null,
  toEmail :null,
  subject: null,
  body:null,
}
public participEmail ={
  fromEmail : "ttaem0199@gmail.com",
  toEmail :"hadhemi.sahbani@gmail.com",
  subject: "Event Participation",
  body:"congrats"
}
  constructor(private http:HttpClient, private httpClient:HttpClientServiceService, private route: ActivatedRoute) { 
  }


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    
     this.httpClient.getEvent(id).subscribe(data => {
      this.event=data
     })
    
  }


participer(event)
{
  return this.httpClient.participer(event.idEvents,5).subscribe(data => {
    if(data) {
      this.httpClient.emailSender(this.participEmail).subscribe(data =>{console.log(data)})
      $('#successModal').modal('show');
      $('#confirmModal').modal('toggle');

    } 
})
}

contactUs()
{return this.httpClient.emailSender(this.formEmail).subscribe(data =>{

  console.log(data);
})

}


}
