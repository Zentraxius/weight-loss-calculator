export class User {
  constructor(gender, heightFeet, heightInches, weightPounds, age, goalWeightPounds, timeFrameDays, activity){
    this.gender = gender;
    this.heightFeet = heightFeet;
    this.heightInches = heightInches;
    this.weightPounds = weightPounds;
    this.age = age;
    this.goalWeightPounds = goalWeightPounds;
    this.timeFrameDays = timeFrameDays;
    this.activity = activity;
    this.height;
    this.weight;
    this.goalWeight;
    this.bmr;
    this.calPerDayLose = 0;
    this.calPerDayGain = 0;
  }

  calculateBMR(){
    this.height = ((this.heightFeet * 30.48) + (this.heightInches * 2.54));
    this.weight = (this.weightPounds / 2.205);
    this.goalWeight = (this.goalWeightPounds / 2.205);
    if (this.gender === "Male"){
      this.bmr = (88.326 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age));
    } else if (this.gender === "Female"){
      this.bmr = (447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age));
    }
    if (this.activity === 1){
      this.bmr *= 1.2;
    } else if (this.activity === 2){
      this.bmr *= 1.375;
    } else if (this.activity === 3){
      this.bmr *= 1.55;
    } else if (this.activity === 4){
      this.bmr *= 1.725;
    } else if (this.activity === 5){
      this.bmr *= 1.9;
    }
    this.bmr = parseFloat((this.bmr).toFixed(2));
  }

  calculateCaloriesPerDay(){
    // This if is for people who would like to lose weight
    if (this.weight > this.goalWeight){
      // This variable is to figure out how many pounds the person would like to lose
      let weightDifference = 2.205 * (this.weight - this.goalWeight)
      // This equation is calculating how many total calories fewer they would need to gain that weight and then dividing that by their preferred time span
      this.calPerDayLose = parseFloat((((this.timeFrameDays * this.bmr) - (weightDifference * 3500))/this.timeFrameDays).toFixed(2));
      // This if is for people who would like to lose weight
    } else if (this.weight < this.goalWeight){
      // This variable is to figure out how many pounds the person would like to gain
      let weightDifference = 2.205 * (this.goalWeight - this.weight)
      // This equation is calculating how many total calories they would need to gain that weight and then dividing that by their preferred time span
      this.calPerDayGain = parseFloat((((this.timeFrameDays * this.bmr) + (weightDifference * 3500))/this.timeFrameDays).toFixed(2));
    }
  }
}

// this.weight - this.weightDifference
// this.weightDifference - this.weight 2116.4 31746