import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOrdersComponent } from './new-orders/new-orders.component';
import { FailedOrdersComponent } from './failed-orders/failed-orders.component';
import { ArchiveOrdersComponent } from './archive-orders/archive-orders.component';
import { SuccessOrdersComponent } from './success-orders/success-orders.component';
import { NeworderDetailsComponent } from './new-orders/neworder-details/neworder-details.component';

const routes: Routes = [
  {path:"neworders",component:NewOrdersComponent},
  {path:"failedorders",component:FailedOrdersComponent},
  {path:"archiveorders",component:ArchiveOrdersComponent},
  {path:"successorders",component:SuccessOrdersComponent},
  {path:'test',component:NeworderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
