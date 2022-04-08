var colors =["green", "red", "yellow", "blue"];

var gamePattern=[];
var level =0;
var userPattern=[];
var started =false;

$(document).keypress(function() {
  console.log(started);
  if (!started) {
    console.log(started);
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});
$(".btn").click(function(){
  var userslection = $(this).attr("id");
  userPattern.push(userslection);
  sounds(userslection);
  buttonPress(userslection);
  if(userPattern.length == gamePattern.length){
    // check if array values are equal
    if (arraysEqual(gamePattern,userPattern)){

        userPattern =[];
        gamePattern = [];
        level++;
        $("#level-title").text("Level " + level);
        for(i =0 ; i <= level ; i++){
          setTimeout(function () {
              nextSequence();
          }, 500*(i+1));

        }
    } else {

        userPattern =[];
        gamePattern = [];
        $("#level-title").text("Uer Lost.. Resetting game.. ");
        level = 0;
        console.log('user lost');
    }
  }
})

function arraysEqual (a1, a2) {
    return a1 === a2 || (
        a1 !== null && a2 !== null &&
        a1.length === a2.length &&
        a1
            .map(function (val, idx) { return val === a2[idx]; })
            .reduce(function (prev, cur) { return prev && cur; }, true)
    );
}


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4) ;
  var randomSleclection = colors[randomNumber];
  gamePattern.push(randomSleclection);
  $("#" + randomSleclection).fadeIn(100).fadeOut(100).fadeIn(100);
  sounds(randomSleclection);

}
function sounds(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function buttonPress(current){
 $("#" +current).addClass("pressed");
 setTimeout(function () {
   $("#" + current).removeClass("pressed");
 }, 100);
}
