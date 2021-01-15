import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialModule';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { View } from './view/View';
import { AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule}from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { AddNewQuestion } from './AddNewQuestion/AddNewQuestion';
import { DataService } from './DataService';
import { AlertMsg } from './AddNewQuestion/AlertMsg';

@NgModule({
  declarations: [
    AppComponent,View,AddNewQuestion,AlertMsg
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    
  
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
