import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { NominatimResponse } from '../nominatim-response';
import { NominatimService } from '../service/nominatim.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit,OnInit{
 private map;
 searchResults: NominatimResponse[];
 lat=48.114384;
 long=-1.669494;
 adress="tunisia";
 smallIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowSize:  [41, 41]
});


  constructor(private nominatimService: NominatimService) { }
  ngOnInit() {
 
      if (this.adress.length > 3) {
        this.nominatimService.addressLookup(this.adress).subscribe(results => {
          this.searchResults = results;
          this.lat=this.searchResults[1].latitude;
          this.long=this.searchResults[1].longitude;
        });
      } else {
        this.searchResults = [];
      }

      this.initMap();

    }    
    
    
      
  ngAfterViewInit(): void {
 

  
  }
 
 

  private initMap(): void {
     
    const location = {
  
     lat : this.lat,
    long:this.long}
      this.map = L.map('map', {
        center: [ location.lat, location.long ],
        zoom: 3 
      });
   
       const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
  
      tiles.addTo(this.map);
    }
  
}