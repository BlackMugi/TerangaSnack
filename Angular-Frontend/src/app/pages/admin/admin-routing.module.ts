import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PlatsComponent } from './plats/plats.component';
import { ReductionsComponent } from './reductions/reductions.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, 
    children:[
      { path: '', component: DashbordComponent },
      { path: 'boissons', component: BoissonsComponent },
      { path: 'commandes', component: CommandesComponent}, 
      { path: 'plats', component: PlatsComponent},
      { path: 'reductions', component: ReductionsComponent},
      { path: 'utilisateurs', component: UtilisateursComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
