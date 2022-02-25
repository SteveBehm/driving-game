/* global data */
// query the dom to get the img element
var $racecarImg = document.querySelector('img');

// create a keydown event listener on the document that
// will change the img's classname in a certain arrow
// key was struck
function turnCar(event) {
  if (event.keyCode === 38) {
    $racecarImg.className = 'orient-north';
  }
  if (event.keyCode === 40) {
    $racecarImg.className = 'orient-south';
  }
  if (event.keyCode === 39) {
    $racecarImg.className = 'orient-east';
  }
  if (event.keyCode === 37) {
    $racecarImg.className = 'orient-west';
  }
}

document.addEventListener('keydown', turnCar);

// Code that changes the images x and y coordinates
/*
I need to increment the image's x value
change the style attribute on the image to the updated value
have them change every 16 milliseconds
increment by a greater number if you want to go faster
*/

function moveCar() {
  data.x += 4;
  $racecarImg.style.left = data.x + 'px';
}

var startCar = setInterval(moveCar, 16);

/* code to create a function that stops the car if the spacebar
is pressed on the keyboard.
To stop the car from moving we need to stop the interval function
from continuing to run. One way is to use clearnInterval within the
spacebar event listener.
*/
function stopCar(event) {
  if (event.keyCode === 32) {
    clearInterval(startCar);
  }
}
document.addEventListener('keydown', stopCar);
