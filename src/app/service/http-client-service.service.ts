import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '@angular/router';
import { Evenemment } from '../evenemment';


@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  private REST_API_SERVER = "http://localhost:8087";


  constructor(private httpClient:HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER+"/all");
  }
 
 
  public deleteEvent(id) {
    return this.httpClient.get(this.REST_API_SERVER + "/deleteEvent/"+ id);
  }
public ajouterEvent(form)
{
  return this.httpClient.post(this.REST_API_SERVER + "/ajouterEvent",form);
}
public save(even:Evenemment) {
  return this.httpClient.post<Evenemment>(this.REST_API_SERVER+ "/test", even);

}
public addUser(form)
{return this.httpClient.post(this.REST_API_SERVER+ "/adduser", form);
}
public allUser()
{
  return this.httpClient.get(this.REST_API_SERVER+"/allUser");

}
public deleteUser(id) {
  return this.httpClient.get(this.REST_API_SERVER + "/deleteUser/"+ id);
}

public getEvent(id){
  return this.httpClient.get(this.REST_API_SERVER+ "/eventById/"+ id);
}
public getSponsor(id){
  return this.httpClient.get(this.REST_API_SERVER+ "/sponsor/"+ id);
}
public participer(idE,idU){
  return this.httpClient.get(this.REST_API_SERVER+ "/inscrit/"+ idE + "/" + idU);
}

public getMyEvent()
{

  return this.httpClient.get(this.REST_API_SERVER+"/getMyEvent2/"+1);
}
public getParticipedInEvents()
{
  return this.httpClient.get(this.REST_API_SERVER+"/getMyEvent/"+1);
}

public emailSender(email)
{
  return this.httpClient.post(this.REST_API_SERVER+"/contactUs",email);
}

} 