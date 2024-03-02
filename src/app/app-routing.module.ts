import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';

const routes: Routes = [
  {
  path:'',redirectTo:'product-details',pathMatch:'full'
  },
  {
    path:'product-list',component:ProductListComponent
  },
  {
    path:'product-details',component:ProductDetailsComponent
  },
  {
    path:'product-alerts',component:ProductAlertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
