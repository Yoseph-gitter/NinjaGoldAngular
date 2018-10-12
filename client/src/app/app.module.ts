import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service' ;
import { HttpClientModule } from '@angular/common/http' ;
import { NinjaPlayGroundComponent } from './ninja-play-ground/ninja-play-ground.component';
import { NinjaActivityComponent } from "./ninja-activity/ninja-activity.component";

@NgModule({
  declarations: [
    AppComponent,
    NinjaPlayGroundComponent,
    NinjaActivityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

