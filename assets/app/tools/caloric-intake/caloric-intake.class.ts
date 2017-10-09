export class CaloricIntakeClass {
  protein: number;
  carbs: number;
  fat: number;

  // Calculations:
  // Cutting: 1.2 grams protein, 1 gram carbs, .2 grams fat
  // Bulking: 1 gram protein, 2 grams carbs, .4 grams fat
  // Maintain: 1 gram protein, 1.6 grams carbs, .35 grams fat

  constructor(public weight: number){}

  cuttingIntake(){
    this.protein = this.weight * 1.2;
    this.carbs = this.weight * 1;
    this.fat = this.weight * .2;
  }
  bulkingIntake(){
    this.protein = this.weight * 1;
    this.carbs = this.weight * 2;
    this.fat = this.weight * .4;
  }
  maintaingIntake(){
    this.protein = this.weight * 1;
    this.carbs = this.weight * 1.6;
    this.fat = this.weight * .35;
  }

  getProtein(){
    return this.protein;
  }
  getCarbs(){
    return this.carbs;
  }
  getFat(){
    return this.fat;
  }
}