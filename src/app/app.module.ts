import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloService } from './hello.service';


@NgModule({
  declarations: [
  ],  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule
  ],
  providers: [
    HelloService // Provide the HelloService here
  ],
})
export class AppModule { }
