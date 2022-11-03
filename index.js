var numberofbuttons = document.querySelectorAll(".drum").length; //to count total number of numberofbuttons
//detecting button press
for (i = 0; i < numberofbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() //calling event listener one by one using anonymous function
    {
      this.style.color = "white"; //(this) gives button which got clicked.
      makesound(this.innerHTML);
      addanimation(this.innerHTML);
    });
}


//when a button got clicked,see which button got clicked by receiving inner html and play sound accordingly. as we have added listeners with each button


//detecting keyboard press
document.addEventListener("keydown", function(event) {
  makesound(event.key); //event gives key which got pressed from keyboard
  addanimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("this.innerHTML");

  }
}

function addanimation(currentkey) {
  var activebtn = document.querySelector("." + currentkey);
  activebtn.classList.add("pressed");

  setTimeout(function() {
    activebtn.classList.remove("pressed");
  }, 100); //time 100 is in milliseconds
}
