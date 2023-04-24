import { NgModule } from '@angular/core'; // Importing NgModule from @angular/core
import { BrowserModule } from '@angular/platform-browser'; // Importing BrowserModule from @angular/platform-browser

import { AppRoutingModule } from './app-routing.module'; // Importing AppRoutingModule from ./app-routing.module
import { AppComponent } from './app.component'; // Importing AppComponent from ./app.component
import {HttpClientModule} from '@angular/common/http'; // Importing HttpClientModule from @angular/common/http

@NgModule({
  declarations: [ // Declaring components
    AppComponent
  ],
  imports: [ // Importing modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // Providing services
  bootstrap: [AppComponent] // Bootstrapping AppComponent
})
export class AppModule { } // Exporting AppModule
