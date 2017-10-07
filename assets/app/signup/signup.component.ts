import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Signup} from "./signup.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  constructor() { }

  ngOnInit() {

  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newSignup = new Signup(value.firstName, value.lastName, value.email, value.password, value.age, value.goal);
    //this.slService.addSignup(newSignup);
    // form.reset();
  }

}
