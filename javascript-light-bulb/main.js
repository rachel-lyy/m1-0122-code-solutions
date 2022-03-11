var theLightbulb = document.querySelector('.lightbulb');
var theBackground = document.querySelector('.background');

function onAndOff() {
  if (document.querySelector('.lightbulb-on') === true) {
    theLightbulb.classList.toggle('lightbulb-off');
    theLightbulb.classList.toggle('lightbulb-on');
    theBackground.classList.toggle('background-off');
    theBackground.classList.toggle('background-on');
  } else {
    theLightbulb.classList.toggle('lightbulb-on');
    theLightbulb.classList.toggle('lightbulb-off');
    theBackground.classList.toggle('background-on');
    theBackground.classList.toggle('background-off');
  }
}

theLightbulb.addEventListener('click', onAndOff);
