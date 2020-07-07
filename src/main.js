import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User } from '../src/weight-loss-calculator.js';

$(document).ready(function () {
  $("#lose").click(function(){
    $("#lose-weight-forms").show()
    $("#gain-weight-forms").hide()
  })
  $("#gain").click(function(){
    $("#gain-weight-forms").show()
    $("#lose-weight-forms").hide()
  })
  
  
  $('form#user-info').submit(function(event) {
    event.preventDefault();
    let inputGender = $('#gender').val();
    let inputHeightFeet = parseInt($('#height-feet').val());
    let inputHeightInches = parseInt($('#height-inches').val());
    let inputWeightPounds = parseInt($('#weight-lb').val());
    let inputAge = parseInt($('#age').val());
    let inputWeightToLose = parseInt($('#weight-to-lose').val());
    let inputWeightToGain = parseInt($('#weight-to-gain').val());
    let inputtedTimeFrame = parseInt($('#time-frame').val());
    let inputActivity = $('#bmr').val();
    let newUser = new User(inputGender, inputHeightFeet, inputHeightInches, inputWeightPounds, inputAge, inputWeightToLose, inputWeightToGain, inputtedTimeFrame, inputActivity);
    newUser.calculateBMR();
    $('#BMR-results').text(`According to the information you have entered, your BMR should be about ${newUser.bmr} meaning, ${newUser.bmr} is how many calories you would consume simply to maintain the weight you are at now.`);
    newUser.calculateCaloriesPerDay();
    console.log(newUser.calPerDay);
    console.log(parseInt($("#bmr").val()));
    console.log(newUser.WeightToLose);
    $('#diet-results').text(`to lose ${newUser.weightToLose} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayLose} calories per day`);
    $('#diet-results').text(`to gain ${newUser.weightToGain} pounds in ${newUser.timeFrameDays} days you must eat ${newUser.calPerDayGain} calories per day`);
  });
});