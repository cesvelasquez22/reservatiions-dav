import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Flex Layout
    FlexLayoutModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),

    BrowserAnimationsModule,
  ],
  providers: [
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
