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
    let inputWeightToLose = parseInt($('#weight-to-lose').val());
    let inputtedTimeFrame = parseInt($('#time-frame').val());
    let newUser = new User(inputGender, inputHeightFeet, inputHeightInches, inputWeightPounds, inputAge, inputWeightToLose, inputtedTimeFrame);
    console.log(newUser);
    newUser.calculateBMR(inputHeightFeet, inputHeightInches, inputWeightPounds);
    $('#BMR-results').text(`your BMR should be ${newUser.bmr}`);
    console.log(newUser);
    newUser.calculateCaloriesPerDay(inputtedTimeFrame, inputWeightToLose);
    console.log(newUser);
    console.log(newUser.calPerDay)
    $('#diet-results').text(`to lose ${newUser.inputWeightToLose} in ${newUser.inputtedTimeFrame} you must eat ${newUser.calPerDay} per day`)
  });
});