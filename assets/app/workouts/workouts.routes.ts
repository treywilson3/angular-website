import {Routes} from "@angular/router";
import {ArmsComponent} from "./arms/arms.component";
import {BackComponent} from "./back/back.component";
import {ChestComponent} from "./chest/chest.component";
import {ShouldersComponent} from "./shoulders/shoulders.component";
import {LegsComponent} from "./legs/legs.component";

export const WORKOUTS_ROUTES: Routes = [
  {path: '', redirectTo: 'arms', pathMatch: 'full'},
  {path: 'arms', component: ArmsComponent},
  {path: 'back', component: BackComponent},
  {path: 'chest', component: ChestComponent},
  {path: 'shoulders', component: ShouldersComponent},
  {path: 'legs', component: LegsComponent}
];