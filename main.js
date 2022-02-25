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
