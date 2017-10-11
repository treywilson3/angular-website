import {WorkoutsComponent} from "./workouts.component";
import {NgModule} from "@angular/core";
import {ChestComponent} from "./chest/chest.component";
import {ShouldersComponent} from "./shoulders/shoulders.component";
import {BackComponent} from "./back/back.component";
import {LegsComponent} from "./legs/legs.component";
import {ArmsComponent} from "./arms/arms.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {WorkoutsService} from "./workouts.service";
import {AppRoutingModule} from "../app-routing";

@NgModule({
  declarations: [
    WorkoutsComponent,
    ChestComponent,
    ShouldersComponent,
    BackComponent,
    LegsComponent,
    ArmsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WorkoutsService]
})
export class WorkoutModule {

}