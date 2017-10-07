export class Workout {
  public muscle: string;
  public goal: string;
  public directions: string;
  public image: string;

  constructor(muscle:string, goal:string, directions:string, image:string){
    this.muscle = muscle;
    this.goal = goal;
    this.directions = directions;
    this.image = image;
  }
}
