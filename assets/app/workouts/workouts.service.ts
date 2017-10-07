import { Injectable } from '@angular/core';
import {Workout} from "./Workout.model";

export class WorkoutsService {
  private workouts: Workout[] = [
    new Workout('Chest', 'Gain', 'Do this. Do that','https://legionathletics.com/wp-content/uploads/2016/01/best-chest-workouts.jpg'),
    new Workout('Back', 'Cut', 'Do this. Do that','https://www.t-nation.com/system/publishing/articles/10001399/original/5-Ways-to-Lose-Fat-While-Building-Muscle.jpg?1419969185'),
    new Workout('Bicpes', 'Gain', 'Do this. Do that','http://mindandmuscle.net/articles/wp-content/uploads/2017/02/mm-bicep-workouts.jpg')
  ];
  getWorkouts(){
    return this.workouts.slice();
  }

}
