import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewRailwayComponent } from './view-railway/view-railway.component';
import { ViewNewRailwayComponent } from './view-new-railway/view-new-railway.component';
import { HttpClientModule } from "@angular/common/http";

const addRoute:Routes = [
  {
    path:"",component:ViewNewRailwayComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewRailwayComponent,
    ViewNewRailwayComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
