import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateArticlesComponent implements OnInit {
  myForm: FormGroup;

  constructor() {}

  onSubmit() {
    // const user = new User(
    //     this.myForm.value.email,
    //     this.myForm.value.password,
    //     this.myForm.value.firstName,
    //     this.myForm.value.lastName,
    //     this.myForm.value.age,
    //     this.myForm.value.goal
    // );
    // this.authService.signup(user)
    //     .subscribe(
    //         data => console.log(data),
    //         error => console.error(error)
    //     );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }
}
