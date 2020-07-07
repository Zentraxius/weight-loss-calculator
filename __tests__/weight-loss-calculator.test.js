import { User } from '../src/weight-loss-calculator.js';
import { testing } from 'googleapis/build/src/apis/testing';

// constructor(gender, heightFeet, heightInches, weightPounds, age, goalWeight, timeFrameDays, activity){
  // this.gender = gender;
  // this.heightFeet = heightFeet;
  // this.heightInches = heightInches;
  // this.weightPounds = weightPounds;
  // this.age = age;
  // this.goalWeight = goalWeight;
  // this.timeFrameDays = timeFrameDays;
  // this.activity = activity;
  // this.height;
  // this.weight;
  // this.bmr = bmr;
  // this.calPerDayLose;
  // this.calPerDayGain;
// }

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 155, 27, 150, 90, 3)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2662.68);
  });
  test('Should correctly calculate recommended calorie intake per day to lose weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayLose).toBe(2468.24)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 155, 27, 160, 60, 4)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2963.31);
  });
  test('Should correctly calculate recommended calorie intake per day to gain weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(3254.98)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Female", 5, 3, 130, 30, 127, 60, 2)
  });
  test('Should correctly calculate BMR of female user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1868.09);
  });
  test('Should correctly calculate recommended calorie intake per day to lose weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayLose).toBe(1693.09)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Female", 5, 3, 130, 30, 135, 30, 1)
  });
  test('Should correctly calculate BMR of female user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1630.33);
  });
  test('Should correctly calculate recommended calorie intake per day to gain weight', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(2213.66)
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 145, 27, 165, 15, 3)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(2568.51);
  });
  test('Should correctly calculate recommended calorie intake per day to gain a lot of weight very quickly', () => {
    reusableUser.calculateBMR();
    reusableUser.calculateCaloriesPerDay();
    expect(reusableUser.calPerDayGain).toBe(7235.18)
  });
});