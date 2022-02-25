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
I need to increment the image's x and y values
change the style attribute on the image to the updated values
have them change every 16 milliseconds
*/

function moveCar() {
  data.x++;
  $racecarImg.style.left = data.x + 'px';
}

setInterval(moveCar, 16);
