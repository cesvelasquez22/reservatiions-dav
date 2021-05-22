import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationDetailComponent } from './components/detail/reservation-detail.component';


@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationDetailComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
