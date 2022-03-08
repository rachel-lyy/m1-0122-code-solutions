function handleClick(event) {
  console.log('button clicked');
  console.log('click event: ', event);
  console.log('click event.target: ', event.target);
}
var redButton = document.querySelector('.click-button');
redButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('hover event: ', event);
  console.log('hover event.target: ', event.target);
}
var purpleButton = document.querySelector('.hover-button');
purpleButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('double-click event: ', event);
  console.log('double-click event.target: ', event.target);
}
var greenButton = document.querySelector('.double-click-button');
greenButton.addEventListener('dblclick', handleDoubleClick);
