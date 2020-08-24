var chosenLetter;

var buttonVal = document.querySelectorAll(".drum").length;


function clickSound(sound){
switch (sound) {
  case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

  case "a":
      var tom1 = new Audio('sounds/tom-2.mp3');
      tom1.play();
      break;

  case "s":
        var tom1 = new Audio('sounds/tom-3.mp3');
        tom1.play();
        break;

  case "d":
        var tom1 = new Audio('sounds/tom-4.mp3');
        tom1.play();
        break;

  case "j":
          var tom1 = new Audio('sounds/crash.mp3');
    tom1.play();
          break;

  case "k":
      var tom1 = new Audio('sounds/kick-bass.mp3');
      tom1.play();
      break;

  case "l":
        var tom1 = new Audio('sounds/snare.mp3');
        tom1.play();
        break;

  default:
  };
};


function animationClick(animation){
  var animationTarget = document.querySelectorAll("." + animation)[0];
  animationTarget.classList.add("pressed");
  setTimeout(function(){
    animationTarget.classList.remove("pressed")
},100)

}

function playRandBeat(){
  var arrayLetter = ["w", "a", "s", "d", "j", "k", "l"];
  var randomValStep1 = Math.random();
  var randomValStep2 = randomValStep1*7;
  var randomValStep = Math.floor(randomValStep2);
  pickedRandomLetter = arrayLetter[randomValStep];
  clickSound(pickedRandomLetter);
  animationClick(pickedRandomLetter);
}

for(var i = 0; i<buttonVal; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
chosenLetter = (this.innerHTML);
clickSound(chosenLetter);
animationClick(chosenLetter);

  });
};

document.addEventListener("keydown", function(evt){
var targetKey = evt.key;
clickSound(targetKey);
animationClick(targetKey);
});

  document.querySelectorAll(".btn2")[0].addEventListener("click", function(){
    window.location.reload(); //https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
  });


  document.querySelectorAll(".btn1")[0].addEventListener("click", function(){
    var userInputValue = document.querySelectorAll("#inputVal")[0].value;
    document.querySelectorAll("input")[0].classList.add("changeOnClick");
    setTimeout(function(){
      document.querySelectorAll("input")[0].classList.remove("changeOnClick");
    },200)
    for (i=1; i<=userInputValue; i++) {
      setTimeout( function(){
          playRandBeat();
      }, i*150 ); //https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
  };
});
