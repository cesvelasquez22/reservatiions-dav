import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'reservations', pathMatch: 'full',
  },
  { path: 'reservations', loadChildren: () => import('./reservations/reservations.module').then((m) => m.ReservationsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
