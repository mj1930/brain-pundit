import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class LocationService {

  constructor(private _router: Router, private http: Http) { }
  public BASE_URL: string = environment.API_URL;

  getLatLang(location) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${environment.keys.token}`).
      toPromise().then((res: Response) => res.json());
  }

  getLocationFromDb(location) {
    return this.http.get(`${this.BASE_URL}api/fetchlocations/${location}`).
    toPromise().then((res: Response) => res.json());
  }

  saveLocationInDb(locationDetails) {
    return this.http.post(`${this.BASE_URL}api/savelocations`, locationDetails).
    toPromise().then((res: Response) => res.json());
  }

  getNews(location) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${location}&apiKey=${environment.keys.key}`).
      toPromise().then((res: Response) => res.json());
  }

}
