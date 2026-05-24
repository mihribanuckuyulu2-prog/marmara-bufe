// Mobil menü aç/kapa
var menu = document.getElementById('nav-menu');
var button = document.querySelector('.nav-toggle');

button.onclick = function () {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
};

// Linke tıklayınca menüyü kapat
var links = document.querySelectorAll('nav a');
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove('open');
  };
}

// Scroll reveal animasyonu
var observer = new IntersectionObserver(function (entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('visible');
    }
  }
}, { threshold: 0.1 });

var revealItems = document.querySelectorAll('.reveal');
for (var i = 0; i < revealItems.length; i++) {
  observer.observe(revealItems[i]);
}
