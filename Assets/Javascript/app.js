$(document).ready(function () {

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

  $("#submit").on("click", function (event) {
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

  database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    var train = childSnapshot.val().trainName;
    var dest = childSnapshot.val().destination;
    var ft = childSnapshot.val().firstTrain;
    var freq = childSnapshot.val().frequency;

    var firstTrainConverted = moment(ft, "hh:mm").subtract(1, "years");
    console.log(firstTrainConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm P"));

    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    console.log("Difference in time: " + diffTime);

    var remainder = diffTime % freq;
    console.log(remainder);

    var minutesTillTrain = freq - remainder;
    console.log("minutes till train: " + moment(minutesTillTrain).format("HH:mm"));
    
  

    var nextTrain = moment().add(minutesTillTrain, "minutes").format("hh:mm a");
    console.log("arrival time: " + moment(nextTrain).format("hh:mm"));

    console.log(train);
    console.log(dest);
    console.log(ft);
    console.log(freq);

    $("#trainResult").append("<tr><td>" + train + "</td></tr>");
    $("#destResult").append("<tr><td>" + dest + "</td></tr>");
    $("#freqResult").append("<tr><td>" + freq + "</td></tr>");
    $("#nextResult").append("<tr><td>" + nextTrain + "</td></tr>");
    $("#minResult").append("<tr><td>" + minutesTillTrain + "</td></tr>");

  });


  $("#clear").on("click",function(event){
    event.preventDefault();
    $("#trainResult").empty();
    $("#destResult").empty();
    $("#freqResult").empty();
    $("#nextResult").empty();
    $("#minResult").empty();

  });



});

