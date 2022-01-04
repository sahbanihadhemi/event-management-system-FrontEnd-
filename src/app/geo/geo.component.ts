import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NominatimResponse } from '../nominatim-response';
import { NominatimService } from '../service/nominatim.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  @Output()onSearch = new EventEmitter();
  searchResults: NominatimResponse[];
  constructor(private nominatimService: NominatimService) { }
 

  ngOnInit(): void {
  this.addressLookup("Tunisia");

  }

  addressLookup (address: string) {
    if (address.length > 3) {
      this.nominatimService.addressLookup(address).subscribe(results => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
    this.onSearch.emit(this.searchResults);
  }
}
