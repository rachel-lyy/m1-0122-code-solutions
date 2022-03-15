var btnListnerOn = document.querySelector('.btn-blue');
btnListnerOn.addEventListener('click', on);

var btnListnerOff = document.querySelector('.btn-red');
btnListnerOff.addEventListener('click', off);

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}
