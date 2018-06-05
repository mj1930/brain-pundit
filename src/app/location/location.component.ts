import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LocationService } from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService]
})
export class LocationComponent implements OnInit {

  lat;
  lng;
  address;
  location: Promise<any>;
  busy: Promise<any>;
  save: Promise<any>;
  getNews: Promise<any>;
  news: any;
  constructor(
    private zone: NgZone,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

  getLocation() {
    this.busy = this.locationService.getLocationFromDb(this.address).then(
      (res: any) => {
        if (res.status == 200) {
          this.lat = res.data.lat;
          this.lng = res.data.lng;
          this.news = res.data.news;
        }
        else {
          this.getnews();
        }
      }
    )
  }

  getnews() {
    this.getNews = this.locationService.getNews(this.address).then(
      (res: any) => {
          console.log(res)
        if (res.status === 'ok') {
          this.news = res.articles;
          this.getAddress();
        }
      }
    )
  }

  saveLocation() {
    let locationDetails = {
      location: this.address,
      lng: this.lng,
      lat: this.lat,
      news: this.news
    }
    this.save = this.locationService.saveLocationInDb(locationDetails).then(
      (res: any) => {
        if (res.status == 200) {
          console.log('saved location')
        }
      }
    )
  }

  getAddress() {
    this.location = this.locationService.getLatLang(this.address).then(
      (res: any) => {
        if (res.status === 'OK') {
          this.lat = res.results[0].geometry.location.lat;
          this.lng = res.results[0].geometry.location.lng;
          this.saveLocation();
        }
      }
    )
  }
}
