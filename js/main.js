var elAboutLink = document.getElementById('aboutLink');
var elAbout = document.getElementById('about');
var elCloseBtn = document.getElementById('closeBtn');

var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 2550 - windowHeight;
var emoji = document.getElementsByClassName('emoji')[0];

elAboutLink.addEventListener('click', function(e){
  elAbout.classList.toggle('showabout');
});

elCloseBtn.addEventListener('click', function(e){
  elAbout.classList.toggle('showabout');
});

window.addEventListener('scroll', function(e) {
  var scrollTop = document.documentElement.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  emoji.style.left = scrollPercent*window.innerWidth + 'px';
});
