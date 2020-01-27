import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeOverViewComponent } from './employee-over-view/employee-over-view.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
  
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmployeeOverViewComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
