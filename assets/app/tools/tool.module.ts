import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CaloricIntakeComponent} from "./caloric-intake/caloric-intake.component";
import {BmiComponent} from "./bmi/bmi.component";
import {ToolsComponent} from "./tools.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    ToolsComponent,
    BmiComponent,
    CaloricIntakeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class ToolModule {

}