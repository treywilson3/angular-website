import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {

}