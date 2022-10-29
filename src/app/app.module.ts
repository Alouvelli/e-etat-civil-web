import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActesNaissanceComponent } from './actes-naissance/actes-naissance.component';
import { ActesMariageComponent } from './actes-mariage/actes-mariage.component';
import { ActesDecesComponent } from './actes-deces/actes-deces.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActesNaissanceComponent,
    ActesMariageComponent,
    ActesDecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
