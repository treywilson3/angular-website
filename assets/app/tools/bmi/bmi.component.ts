import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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

  constructor() {}

  onSubmit() {
    this.weight = this.myForm.value.weight;
    this.feet = this.myForm.value.feet;
    this.inches = this.myForm.value.inches;

    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      weight: new FormControl(null, Validators.required),
      feet: new FormControl(null, Validators.required),
      inches: new FormControl(null, Validators.required)
    });
  }
}