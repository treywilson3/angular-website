import { Component, OnInit } from '@angular/core';
import {WorkoutsService} from "./workouts.service";
import {Workout} from "./workout.model";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[];

  constructor(private slService: WorkoutsService) { }

  ngOnInit() {
    this.workouts=this.slService.getWorkouts();
  }

}
