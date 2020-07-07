import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from '../src/weight-loss-calculator.js';

$(document).ready(function () {
  $('form#user-info').submit(function(event) {
    event.preventDefault();
    let inputGender = $('#gender').val();
    let inputHeightFeet = parseInt($('#height-feet').val());
    let inputHeightInches = parseInt($('#height-inches').val());
    let inputWeightPounds = parseInt($('#weight-lb').val());
    let inputAge = parseInt($('#age').val());
    let inputGoalWeight = parseInt($('#goal-weight').val());
    let inputtedTimeFrame = parseInt($('#time-frame').val());
    let inputActivity = $('#bmr').val();
    let newUser = new User(inputGender, inputHeightFeet, inputHeightInches, inputWeightPounds, inputAge, inputGoalWeight, inputtedTimeFrame, inputActivity);
    newUser.calculateBMR();
    $('#BMR-results').text(`According to the information you have entered, your BMR should be about ${newUser.bmr} meaning, ${newUser.bmr} is how many calories you would consume simply to maintain the weight you are at now.`);
    newUser.calculateCaloriesPerDay();
    console.log(newUser.calculateCaloriesPerDay());
    console.log(parseInt($("#bmr").val()));
    $('#diet-results').text(`to lose ${this.weight - this.goalWeight} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayLose} calories per day`);
    $('#diet-results').text(`to gain ${this.goalWeight - this.weight} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayGain} calories per day`);
  });
});