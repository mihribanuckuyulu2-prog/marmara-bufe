// Mobil menü aç/kapa
var menu = document.getElementById('nav-menu');
var button = document.querySelector('.nav-toggle');

button.onclick = function () {
  var isOpen = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
};

// Linke tıklayınca menüyü kapat
var links = document.querySelectorAll('nav a');
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
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

// Hero fotoğraf değiştirme
var track = document.querySelector('.hero-slider-track');
var slides = document.querySelectorAll('.hero-slide');
var current = 0;
var autoSlide;

function goToSlide(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = 'translateX(-' + (current * 100) + '%)';
}

function startAutoSlide() {
  autoSlide = setInterval(function () {
    goToSlide(current + 1);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

document.querySelector('.hero-arrow.right').onclick = function () {
  goToSlide(current + 1);
  resetAutoSlide();
};

document.querySelector('.hero-arrow.left').onclick = function () {
  goToSlide(current - 1);
  resetAutoSlide();
};

startAutoSlide();

// Dil çevirileri
var translations = {
  'nav-home': { tr: 'Ana Sayfa', en: 'Home' },
  'nav-about': { tr: 'Hakkımızda', en: 'About Us' },
  'nav-menu': { tr: 'Menü', en: 'Menu' },
  'nav-contact': { tr: 'İletişim', en: 'Contact' },
  'hero-tag': { tr: 'Marmara Adası', en: 'Marmara Island' },
  'hero-title': { tr: 'Ada\'nın Lezzet <em>Molası</em>', en: 'Island\'s <em>Flavor Break</em>', html: true },
  'hero-desc': { tr: 'Günlük taze çibörekler, sıcak tostlar ve enfes lezzetlerle dolu büfemizde sizi ada sıcaklığında bir mola bekliyor.', en: 'Daily fresh çibörek, hot toasts and delicious flavors await you at our buffet with island warmth.' },
  'hero-menu-btn': { tr: 'Menüyü İncele →', en: 'View Menu →' },
  'hero-contact-btn': { tr: 'İletişim', en: 'Contact' },
  'section-label-menu': { tr: 'Lezzetlerimiz', en: 'Our Flavors' },
  'section-title-menu': { tr: 'Menümüz', en: 'Our Menu' },
  'section-desc-menu': { tr: 'Taze malzemelerle hazırladığımız lezzetler, ada esintisiyle servis edilir.', en: 'Prepared with fresh ingredients, served with an island breeze.' },
  'section-label-about': { tr: 'Hakkımızda', en: 'About Us' },
  'section-title-about': { tr: 'Aykut Büfe', en: 'Aykut Büfe' },
  'section-desc-about': { tr: 'Marmara Adası\'nın kalbinde, 31 yıllık bir aile işletmesi olarak güler yüzlü hizmet ve taze lezzetlerle sizleri ağırlıyoruz.', en: 'In the heart of Marmara Island, as a 31-year-old family business, we welcome you with friendly service and fresh flavors.' },
  'about-p1': { tr: 'Ada halkının ve ziyaretçilerin uğrak noktası olan büfemizde, her sabah taze ekmekle hazırladığımız tost ve kumru çeşitlerimizle güne başlıyoruz. Izgara köfte, döner ve çibörek gibi sıcak lezzetlerimiz ise öğle saatlerinde adanın dört bir yanından müşterilerimizi ağırlıyoruz.', en: 'At our buffet, a favorite spot for locals and visitors, we start the day with toast and kumru varieties prepared with fresh bread every morning. Our grilled meatballs, döner, and çibörek welcome customers from all around the island during lunch hours.' },
  'about-p2': { tr: 'Misafirlerimize sadece lezzetli yemekler değil, aynı zamanda samimi bir ada ortamı sunuyoruz. Büfemizde keyifli bir mola verebilirsiniz.', en: 'We offer our guests not only delicious meals but also a warm island atmosphere. You can enjoy a pleasant break at our buffet.' },
  'highlight-1-label': { tr: 'Açılış Yılı', en: 'Est.' },
  'highlight-2-label': { tr: 'Çeşit', en: 'Varieties' },
  'highlight-3-label': { tr: 'Hizmet', en: 'Service' },
  'menu-1-title': { tr: 'Kumru Ekmek', en: 'Kumru Bread' },
  'menu-1-desc': { tr: 'Özel kumru ekmeğinde kaşar, ince kıyılmış sosis, turşu, patates, ketçap ve mayonez.', en: 'Special kumru bread with cheese, finely chopped sausage, pickles, potato, ketchup and mayonnaise.' },
  'menu-2-title': { tr: 'Kumru Lavaş', en: 'Kumru Wrap' },
  'menu-2-desc': { tr: 'Lavaşta kaşar, ince kıyılmış sosis, turşu, patates, ketçap ve mayonez.', en: 'Wrap with cheese, finely chopped sausage, pickles, potato, ketchup and mayonnaise.' },
  'menu-3-title': { tr: 'Karışık Tost', en: 'Mixed Toast' },
  'menu-3-desc': { tr: 'Kaşar, sucuk, domates ve tereyağında közlenmiş tost.', en: 'Grilled toast with cheese, sausage, tomato and butter.' },
  'menu-4-title': { tr: 'Tavuk Döner Ekmek', en: 'Chicken Döner Bread' },
  'menu-4-desc': { tr: 'Tavuk döner, yeşillik ve domatesle ekmek arası.', en: 'Chicken döner with greens and tomato in bread.' },
  'menu-5-title': { tr: 'Tavuk Döner Lavaş', en: 'Chicken Döner Wrap' },
  'menu-5-desc': { tr: 'Tavuk döner, yeşillik ve domatesle lavaş arası.', en: 'Chicken döner with greens and tomato in wrap.' },
  'menu-6-title': { tr: 'Hamburger', en: 'Hamburger' },
  'menu-6-desc': { tr: 'Izgara köfte, marul, domates, soğan ve özel sos ile.', en: 'Grilled meatball patty with lettuce, tomato, onion and special sauce.' },
  'menu-7-title': { tr: 'Köfte Ekmek', en: 'Meatball Bread' },
  'menu-7-desc': { tr: 'Izgara köfte, domates ve biber ile ekmek arası.', en: 'Grilled meatballs with tomato and pepper in bread.' },
  'menu-8-title': { tr: 'Sucuk Ekmek', en: 'Sucuk Bread' },
  'menu-8-desc': { tr: 'Izgara sucuk, domates ve biber ile ekmek arası.', en: 'Grilled sucuk with tomato and pepper in bread.' },
  'menu-9-title': { tr: 'Çibörek', en: 'Çibörek' },
  'menu-9-desc': { tr: 'Kıymalı, çıtır çıtır kızartılmış el açması çibörek.', en: 'Hand-rolled, crispy fried çibörek with minced meat.' },
  'menu-10-title': { tr: 'Gözleme', en: 'Gözleme' },
  'menu-10-desc': { tr: 'Patatesli, peynirli veya kıymalı el açması gözleme.', en: 'Hand-rolled gözleme with potato, cheese or minced meat.' },
  'menu-10-ing-1': { tr: 'Patates', en: 'Potato' },
  'menu-10-ing-2': { tr: 'Peynir', en: 'Cheese' },
  'menu-10-ing-3': { tr: 'Kıyma', en: 'Minced Meat' },
  'section-label-contact': { tr: 'İletişim', en: 'Contact' },
  'section-title-contact': { tr: 'Bize Ulaşın', en: 'Get in Touch' },
  'section-desc-contact': { tr: 'Görüş ve önerileriniz için bize aşağıdaki formdan ulaşabilirsiniz.', en: 'You can reach us via the form below for your comments and suggestions.' },
  'contact-info-title': { tr: 'Adres & Telefon', en: 'Address & Phone' },
  'contact-address-label': { tr: 'Adres:', en: 'Address:' },
  'contact-phone-label': { tr: 'Telefon:', en: 'Phone:' },
  'contact-email-label': { tr: 'E-posta:', en: 'Email:' },
  'contact-hours-label': { tr: 'Çalışma Saatleri:', en: 'Hours:' },
  'contact-hours': { tr: '7/24', en: '7/24' },
  'contact-map-title': { tr: 'Bizi Bulun', en: 'Find Us' },
  'form-name-label': { tr: 'Adınız', en: 'Your Name' },
  'form-email-label': { tr: 'E-posta Adresiniz', en: 'Email Address' },
  'form-phone-label': { tr: 'Telefon Numaranız', en: 'Phone Number' },
  'form-message-label': { tr: 'Mesajınız', en: 'Your Message' },
  'form-submit': { tr: 'Gönder →', en: 'Send →' },
  'footer-desc': { tr: 'Marmara Adası\'nın kalbinde, güler yüzlü hizmet ve taze lezzetlerle sizi ağırlıyoruz.', en: 'In the heart of Marmara Island, we welcome you with friendly service and fresh flavors.' },
  'footer-links-title': { tr: 'Hızlı Linkler', en: 'Quick Links' },
  'footer-nav-home': { tr: 'Ana Sayfa', en: 'Home' },
  'footer-nav-about': { tr: 'Hakkımızda', en: 'About' },
  'footer-nav-menu': { tr: 'Menü', en: 'Menu' },
  'footer-nav-contact': { tr: 'İletişim', en: 'Contact' },
  'footer-contact-title': { tr: 'İletişim', en: 'Contact' },
  'footer-address': { tr: 'Okullar, Sardunya Sk. No:1, 10360 Marmara/Balıkesir', en: 'Okullar, Sardunya Sk. No:1, 10360 Marmara/Balıkesir' },
  'footer-phone': { tr: '0541 735 89 91', en: '0541 735 89 91' },
  'footer-email': { tr: 'info@aykutbufe.com', en: 'info@aykutbufe.com' },
  'copyright': { tr: '© 2026 Aykut Büfe. Tüm hakları saklıdır.', en: '© 2026 Aykut Büfe. All rights reserved.' },
  'footer-tagline': { tr: 'Ada\'nın Lezzet Molası', en: 'Island\'s Flavor Break' },
  'lang-btn': { tr: 'TR', en: 'EN' }
};

var currentLang = localStorage.getItem('preferred-lang') || 'tr';

function setLanguage(lang) {
  var elements = document.querySelectorAll('[data-key]');
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    var key = el.getAttribute('data-key');
    var t = translations[key];
    if (t) {
      if (t.html) {
        el.innerHTML = t[lang];
      } else {
        el.textContent = t[lang];
      }
    }
  }
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-lang', lang);
}

setLanguage(currentLang);

document.querySelector('.lang-toggle').onclick = function () {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  setLanguage(currentLang);
};

