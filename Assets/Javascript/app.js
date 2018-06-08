$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyApHwFoY28tIayJGMjvePXU0xbRYvNYpFU",
    authDomain: "train-scheduler-f7c84.firebaseapp.com",
    databaseURL: "https://train-scheduler-f7c84.firebaseio.com",
    projectId: "train-scheduler-f7c84",
    storageBucket: "train-scheduler-f7c84.appspot.com",
    messagingSenderId: "731502858049"
  };
  firebase.initializeApp(config);


// variable for database
  var database = firebase.database();

// initial variables
  var name = "";
  var dest = "";
  var firstTrain = "";
  var frequency = "";


  // onclick event to add new trains
  $("#addTrain-btn").on("click", function(){
    // keeps the page from default behavior
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    name = $("#trainName-input").val().trim();
    dest = $("#trainDest-input").val().trim();
    firstTrain = $("#trainTime-input").val().trim();
    frequency = $("#trainFreq-input").val().trim();

    // initial data to your Firebase database.

    database.ref().set();



  });




});

