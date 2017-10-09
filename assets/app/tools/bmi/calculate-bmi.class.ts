export class CalculateBmiClass {
  kilos: number;
  meters: number;
  squaredMeters: number;

  constructor(public weight: number, public feet: number, public inches: number) {}

  convertWeightToKilos(weight: number){
    // convert pounds to kilos
    return weight * .45;
  }
  convertHeightToMeters(totalInches: number){
    // use the total inches (feet + inches) and multiply it by .025 to get meters
    return totalInches * .025;
  }
  convertFeetToInches(feet: number){
    // divide feet by 12 to get the inches
    return feet * 12;
  }
  squareMeters(meter: number){
    // square the meters (per calculation)
    return meter * meter;
  }
  divideWeightBySquaredMeters(kilos: number, squaredMeters: number){
    // divide weight by squared meters (per calculation)
    return kilos / squaredMeters;
  }
  calculateBMI(){
    this.kilos = this.convertWeightToKilos(this.weight);
    this.meters = this.convertHeightToMeters(this.inches + this.convertFeetToInches(this.feet));
    this.squaredMeters = this.squareMeters(this.meters);
    return this.divideWeightBySquaredMeters(this.kilos, this.squaredMeters);
  }

}