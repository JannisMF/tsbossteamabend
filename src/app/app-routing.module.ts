import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerDashboardComponent} from "../apps/player-dashboard/player-dashboard.component";
import {PlayerControllerComponent} from "../apps/player-controller/player-controller.component";


const routes: Routes = [
  { path: '',component: PlayerDashboardComponent},
  {path:'player/:id',component:PlayerControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
