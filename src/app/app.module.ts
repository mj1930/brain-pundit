import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routes';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { environment } from './../environments/environment';
import { AgmCoreModule } from '@agm/core';
// import {GooglePlaceModule} from "angular2-google-place";

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    // GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keys.token
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
