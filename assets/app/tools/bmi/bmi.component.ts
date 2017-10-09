import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {CalculateBmiClass} from "./calculate-bmi.class";

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
  myForm: FormGroup;
  public weight: number;
  public feet: number;
  public inches: number;
  public bmi: CalculateBmiClass;
  public userBmi: string;

  constructor() {}

  onSubmit() {
    this.weight = this.myForm.value.weight;
    this.feet = this.myForm.value.feet;
    this.inches = this.myForm.value.inches;
    this.myForm.reset();

    this.bmi = new CalculateBmiClass(this.weight, this.feet, this.inches);
    this.userBmi = this.bmi.calculateBMI().toFixed(2);
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      weight: new FormControl(null, Validators.required),
      feet: new FormControl(null, Validators.required),
      inches: new FormControl(null, Validators.required)
    });
  }
}