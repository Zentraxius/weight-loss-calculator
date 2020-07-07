export class User {
  constructor(gender, heightFeet, heightInches, weightPounds, age, weightToLose, weightToGain, timeFrameDays, activity){
    this.gender = gender;
    this.heightFeet = heightFeet;
    this.heightInches = heightInches;
    this.weightPounds = weightPounds;
    this.age = age;
    this.weightToLose = weightToLose;
    this.weightToGain = weightToGain;
    this.timeFrameDays = timeFrameDays;
    this.activity = activity;
    this.height;
    this.weight;
    this.bmr;
    this.calPerDayLose;
    this.calPerDayGain;
  }

  calculateBMR(){
    this.height = ((this.heightFeet * 30.48) + (this.heightInches * 2.54));
    this.weight = (this.weightPounds / 2.205);
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
    this.calPerDayLose = parseFloat((((this.timeFrameDays * this.bmr) - (this.weightToLose * 3500))/this.timeFrameDays).toFixed(2));
    this.calPerDayGain = parseFloat((((this.timeFrameDays * this.bmr) + (this.weightToGain * 3500))/this.timeFrameDays).toFixed(2));
  }
}

/*

Questions to ask our user so that we can more accurately gauge how many calories they burn in a day:

Value === 1 If you are sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2
Value === 2 If you are lightly active (light exercise/sports 1-3 days/week) : Calorie-Calculation = BMR x 1.375
Value === 3 If you are moderately active (moderate exercise/sports 3-5 days/week) : Calorie-Calculation = BMR x 1.55
Value === 4 If you are very active (hard exercise/sports 6-7 days a week) : Calorie-Calculation = BMR x 1.725
Value === 5 If you are extra active (very hard exercise/sports & physical job or 2x training) : Calorie-Calculation = BMR x 1.9

 */