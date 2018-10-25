import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {BuildingComponent} from './building/building.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuildingDetailComponent} from './building-detail/building-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'buildings', component: BuildingComponent},
  { path: 'buildings/:id', component: BuildingDetailComponent },
  { path: 'dashboard', component: DashboardComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


