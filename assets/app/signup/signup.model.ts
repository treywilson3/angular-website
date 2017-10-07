export class Signup {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public age: number;
  public goal: string;

  constructor(firstName: string, lastName: string, email: string, password: string, age: number, goal:string){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    this.age=age;
    this.goal=goal;
  }

}
