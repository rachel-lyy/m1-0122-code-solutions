var tabContainer = document.querySelector('.tab-container');

var tabs = document.querySelectorAll('.tab');
var tabLength = tabs.length;

var views = document.querySelectorAll('.view');
var viewsLength = views.length;

function handleTabClicks(e) {
  if (!e.target.matches('.tab')) {
    return;
  }

  for (let i = 0; i < tabLength; i++) {
    if (tabs[i] === e.target) {
      tabs[i].setAttribute('class', 'tab active');
    } else {
      tabs[i].setAttribute('class', 'tab');
    }
  }

  var dataView = e.target.getAttribute('data-view');

  for (let i = 0; i < viewsLength; i++) {
    var value = views[i].getAttribute('data-view');
    if (value === dataView) {
      views[i].setAttribute('class', 'view');
    } else {
      views[i].setAttribute('class', 'view hidden');
    }
  }
}
tabContainer.addEventListener('click', handleTabClicks);
