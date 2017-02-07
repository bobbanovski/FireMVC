import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAFhqS3kQFn0HFzYbmFgIcE_oRPd76v31U",
    authDomain: "firemvc.firebaseapp.com",
    databaseURL: "https://firemvc.firebaseio.com",
    storageBucket: "firemvc.appspot.com",
    messagingSenderId: "314145306498"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
