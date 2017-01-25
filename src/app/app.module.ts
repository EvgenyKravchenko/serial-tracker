import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { MaterialModule } from '@angular/material';

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBGn6GcIMf1C6u4GWv7To89nM0mKYQTIIc",
  authDomain: "serialtracker-e5b43.firebaseapp.com",
  databaseURL: "https://serialtracker-e5b43.firebaseio.com",
  storageBucket: "serialtracker-e5b43.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
