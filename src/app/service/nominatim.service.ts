import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { NominatimResponse } from '../nominatim-response';

@Injectable({
  providedIn: 'root'
})
export class NominatimService {

 BASE_NOMINATIM_URL: string = 'nominatim.openstreetmap.org';
DEFAULT_VIEW_BOX: string = 'viewbox=-25.0000%2C70.0000%2C50.0000%2C40.0000';


    constructor(private http: HttpClient) {
    }
  
    addressLookup(req?: any): Observable<NominatimResponse[]> {
      let url = `https://${this.BASE_NOMINATIM_URL}/search?format=json&q=${req}&${this.DEFAULT_VIEW_BOX}&bounded=1`;
      return this.http
        .get(url).pipe(
          map((data: any[]) => data.map((item: any) => new NominatimResponse(
            item.lat,
            item.lon,
            item.display_nameng 
            ))
          )
        )
    }
  
  }