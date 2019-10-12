import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarGetComponent } from './car-get/car-get.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { InfoUpdateDeleteComponent } from './info-update-delete/info-update-delete.component';
import { BookCarComponent } from './book-car/book-car.component';

const routes: Routes = [
  {
    path: 'car/create',
    component: CarAddComponent
  },
  {
    path: 'car/edit/:id',
    component: CarEditComponent
  },
  {
    path: 'car',
    component: InfoUpdateDeleteComponent
  },
  {
    path: 'car/show_book_status',
    component: CarGetComponent
  },
  {
    path: 'car/book',
    component: BookCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }