import { User } from '../src/weight-loss-calculator.js';
import { testing } from 'googleapis/build/src/apis/testing';

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Male", 5, 9, 155, 27)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1746.15);
  });
});

describe('User', () => {
  let reusableUser;
  beforeEach(() => {
    reusableUser = new User("Female", 175, 72.5, 27)
  });
  test('Should correctly calculate BMR of male user', () => {
    reusableUser.calculateBMR();
    expect(reusableUser.bmr).toBe(1543.24);
  });
});