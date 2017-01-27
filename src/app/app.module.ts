import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from "angularfire2";
import { MaterialModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { LayoutModule } from "./layout/layout.module";
import { AuthGuard } from "./shared/services/auth-guard.service";

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBGn6GcIMf1C6u4GWv7To89nM0mKYQTIIc",
  authDomain: "serialtracker-e5b43.firebaseapp.com",
  databaseURL: "https://serialtracker-e5b43.firebaseio.com",
  storageBucket: "serialtracker-e5b43.appspot.com"
};
const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
};

const MATERIAL_MODULES: any[] = [
  MaterialModule.forRoot(),
  MdToolbarModule.forRoot(),
  MdIconModule.forRoot()
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ...MATERIAL_MODULES,

    LayoutModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
