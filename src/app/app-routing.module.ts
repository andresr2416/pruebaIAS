import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  {
    path: 'direccionentrega',
    component: DeliveryComponent,
  },
  {
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fechaentrega',
    component: DeliveryDateComponent,
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
