import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CaloricIntakeClass} from "./caloric-intake.class";

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})
export class CaloricIntakeComponent{
  myForm: FormGroup;
  caloricIntake: CaloricIntakeClass;
  weight: number;
  goal: string;
  protein: number;
  carbs: number;
  fat: number;


  onSubmit() {
    this.weight = this.myForm.value.weight;
    this.goal = this.myForm.value.goal;
    this.myForm.reset();

    this.caloricIntake = new CaloricIntakeClass(this.weight);
    if (this.goal === 'Cutting'){
          this.caloricIntake.cuttingIntake();
    } else if (this.goal === 'Bulking'){
          this.caloricIntake.bulkingIntake();
    } else {
          this.caloricIntake.maintaingIntake();
    }
    this.protein = this.caloricIntake.getProtein();
    this.carbs = this.caloricIntake.getCarbs();
    this.fat = this.caloricIntake.getFat();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      weight: new FormControl(null, Validators.required),
      goal: new FormControl(null, Validators.required)
    });
  }
}
