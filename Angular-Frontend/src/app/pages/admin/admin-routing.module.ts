import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, 
    children:[
      { path: '', component: DashbordComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
