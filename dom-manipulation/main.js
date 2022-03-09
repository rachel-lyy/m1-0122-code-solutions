
var hotBtn = document.querySelector('.hot-button');
var numbers = document.querySelector('.click-count');
var num = 0;
function iterate() {
  num++;
  updateNum();
}

hotBtn.addEventListener('click', iterate);

function updateNum() {
  if (num < 4) {
    hotBtn.classList.remove('cold');
    hotBtn.classList.add('cool');
  } else if (num < 10) {
    hotBtn.classList.remove('cool');
    hotBtn.classList.add('tepid');
  } else if (num < 13) {
    hotBtn.classList.remove('tepid');
    hotBtn.classList.add('warm');
  } else if (num < 16) {
    hotBtn.classList.remove('warm');
    hotBtn.classList.add('hot');
  } else {
    hotBtn.classList.remove('hot');
    hotBtn.classList.add('nuclear');
  }
  numbers.textContent = 'Clicks: ' + num;
}
