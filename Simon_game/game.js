var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];


var level = 0;


//Sequence
function nextSequence() {


 userClickedPattern = [];
   $("#level-title").text("Level " + level);

  level++;

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeOut(200).fadeIn(150);
  playSound(randomChosenColour);





  // console.log(level);
  // console.log(randomNumber);
  // console.log(randomChosenColour);
  // console.log(gamePattern);
}


//button-click

$(".btn").click(function() {
  var userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);



});


//Music

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3"); //
  audio.play();
}

//Anime
function animatePress(currentColour) {

  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");

  }, 100);

}



$(document).one("keypress", function() {
  nextSequence();

});

//válasz
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) { //itt valszeg vmi mása megoldás
    console.log("success");
  if (userClickedPattern.length === gamePattern.length) {


    setTimeout(function () {
           nextSequence();
         }, 1000);

  }





  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");

    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    console.log("fail");
    starOver();

    }

}

function starOver() {
level=0;
gamePattern =[];
// userClickedPattern =[];
$(document).one("keypress", function() {
  nextSequence();

});

}
