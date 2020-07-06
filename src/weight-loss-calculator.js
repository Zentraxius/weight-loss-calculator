export class User {
  constructor(gender, heightFeet, heightInches, weightPounds, age, weightToLose, timeFrameDays){
    this.gender = gender;
    this.heightFeet = heightFeet;
    this.heightInches = heightInches;
    this.weightPounds = weightPounds;
    this.age = age;
    this.weightToLose = weightToLose;
    this.timeFrameDays = timeFrameDays;
    this.height = 0;
    this.weight = 0;
    this.bmr;
    this.calPerDay;
  }

  calculateBMR(feetTall, remainingInches, weightPounds){
    this.height += (feetTall * 30.48);
    this.height += (remainingInches * 2.54);
    this.weight += (weightPounds / 2.205);
    if (this.gender === "Male"){
      this.bmr = (88.326 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age)).toFixed(2);
      this.bmr = parseInt(this.bmr);
    } else if (this.gender === "Female"){
      this.bmr = (447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age)).toFixed(2);
      this.bmr = parseInt(this.bmr);
    }
  }

  calculateCaloriesPerDay(timeFrameDays, weightToLose){
    this.calPerDay = ((timeFrameDays * this.bmr) - (weightToLose * 3500))/60
  }
}