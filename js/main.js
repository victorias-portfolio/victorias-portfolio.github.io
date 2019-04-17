var elAboutLink = document.getElementById('aboutLink');
var elAbout = document.getElementById('about');
var elCloseBtn = document.getElementById('closeBtn');

elAboutLink.addEventListener('click', function(e){
  elAbout.classList.toggle('showabout');
});

elCloseBtn.addEventListener('click', function(e){
  elAbout.classList.toggle('showabout');
});
