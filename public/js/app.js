let circle = document.querySelector('#circle');
let up = document.querySelector('#up');
let down = document.querySelector('#down');

var rotateValue = circle.style.transform;
var rotateSum;

up.onclick = function() {

  rotateSum = rotateValue + "rotate(-90deg)";

  circle.style.transform = rotateSum;

  rotateValue = rotateSum;
}

down.onclick = function() {

  rotateSum = rotateValue + "rotate(90deg)";

  circle.style.transform = rotateSum;

  rotateValue = rotateSum;
}
