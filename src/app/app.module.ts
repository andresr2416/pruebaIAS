import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DisplayComponent } from './components/display/display.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomInterceptor } from './custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    DeliveryComponent,
    DeliveryDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true } // Agrega tu interceptor a la lista de proveedores
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
