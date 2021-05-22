import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '', component: LayoutComponent, children: [
      {
        path: '', redirectTo: 'reservations', pathMatch: 'full',
      },
      { path: 'reservations', loadChildren: () => import('./reservations/reservations.module').then((m) => m.ReservationsModule) },
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule) },
    ],
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
