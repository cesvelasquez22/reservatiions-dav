import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDetailComponent } from './components/detail/reservation-detail.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  {
    path: '', component: ReservationsComponent,
  },
  {
    path: 'create', component: ReservationDetailComponent,
  },
  {
    path: ':id', component: ReservationDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
