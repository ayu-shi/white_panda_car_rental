import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';
import { CarAddComponent } from './car-add/car-add.component';
import { CarGetComponent } from './car-get/car-get.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { InfoUpdateDeleteComponent } from './info-update-delete/info-update-delete.component';
import { BookCarComponent } from './book-car/book-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarAddComponent,
    CarGetComponent,
    CarEditComponent,
    InfoUpdateDeleteComponent,
    BookCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
