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

  var trainName = "";
  var destination = "";
  var firstTrain = 0;
  var frequency = 0;

  $("#submit").on("click", function(event) {
    event.preventDefault();

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency

    });

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#frequency").val("");

    return false;

  });




});

