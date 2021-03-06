var buyBtns = document.querySelectorAll(".item-buy-btn");
var bookmarkBtns = document.querySelectorAll(".item-bookmark-btn");
var closeBtns = document.querySelectorAll(".close-popup");
var slideBtns = document.querySelectorAll(".services-slider-item");
var promoSlideBtns = document.querySelectorAll(".promo-slider-btn");
var popups = document.querySelectorAll(".popup");
var cartPopup = document.querySelector(".cart-add-popup");
var mapPopup = document.querySelector(".map-popup");
var writeUsPopup = document.querySelector(".write-us-popup");

/*Попап Добавлено в корзину Открыть*/
for (var i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener("click", function(event) {
    cartPopup.classList.remove("visually-hidden");
    cartPopup.classList.add("show");
    document.querySelector(".popup-overlay").classList.remove("visually-hidden");
    cartPopup.classList.remove("show-popup");
    void cartPopup.offsetWidth;
    cartPopup.classList.add("show-popup");
    event.preventDefault();
  });
};

/*Все попапы - Закрыть*/
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", closePopup);
};
document.querySelector(".popup-overlay").addEventListener("click", closePopup);
document.querySelector(".continue-shopping-btn").addEventListener("click", closePopup);

function closePopup(event) {
  for (var i = 0; i < popups.length; i++) {
    popups[i].classList.add("visually-hidden");
    popups[i].classList.remove("show");
    document.querySelector(".popup-overlay").classList.add("visually-hidden");
    event.preventDefault();
  };
};

/*Попап с картой Открыть*/
if (document.querySelector(".map-thumbnail")) {
  document.querySelector(".map-thumbnail").addEventListener("click", function(event) {
    mapPopup.classList.remove("visually-hidden");
    mapPopup.classList.add("show");
    document.querySelector(".popup-overlay").classList.remove("visually-hidden");
    mapPopup.classList.remove("show-popup");
    void mapPopup.offsetWidth;
    mapPopup.classList.add("show-popup");
    event.preventDefault();
  });
};

/*Попап пишите нам Открыть*/
if (document.querySelector(".contact-info-write-us-btn")) {
  document.querySelector(".contact-info-write-us-btn").addEventListener("click", function(event) {
    writeUsPopup.classList.remove("visually-hidden");
    writeUsPopup.classList.add("show");
    document.querySelector(".popup-overlay").classList.remove("visually-hidden");
    writeUsPopup.classList.remove("show-popup");
    void writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("show-popup");
    event.preventDefault();
  });
};

/*СЛАЙДЕР - СЕРВИСЫ*/
if (slideBtns) {
  for (var i = 0; i < slideBtns.length; i++) {
    slideBtns[i].addEventListener("click", function() {
      var Services = document.getElementsByClassName("service-description-item"),
        i;
      for (var i = 0; i < Services.length; i++) {
        Services[i].style.display = "none";
      };
      for (var i = 0; i < slideBtns.length; i++) {
        slideBtns[i].setAttribute("tabindex", "0");
      };
      var ServicesLinks = document.getElementsByClassName("services-slider-item"),
        i;
      for (var i = 0; i < ServicesLinks.length; i++) {
        ServicesLinks[i].classList.remove("services-slider-item-active");
      }
      this.classList.add("services-slider-item-active");
      this.classList.remove("services-slider-item-normal");
      this.removeAttribute("tabindex");
      if (this.innerHTML == "Гарантия") {
        document.getElementById("warrantydescript").style.display = "block";
      } else if (this.innerHTML == "Доставка") {
        document.getElementById("deliverydescript").style.display = "block";
      } else if (this.innerHTML == "Кредит") {
        document.getElementById("creditdescript").style.display = "block";
      }
    });
  };
};

/*СЛАЙДЕР - ПРОМО*/
if (promoSlideBtns) {
  for (var i = 0; i < promoSlideBtns.length; i++) {
    promoSlideBtns[i].addEventListener("click", function() {

      var Slides = document.getElementsByClassName("promo-item-slider"),
        i;
      for (var i = 0; i < Slides.length; i++) {
        Slides[i].style.display = "none";
      }

      var Slide = this.parentNode;
      if (this.classList.contains("promo-slider-forward-btn")) {
        if (Slide.nextElementSibling != undefined) {
          Slide.nextElementSibling.style.display = "block";
        } else {
          Slide.parentNode.firstElementChild.style.display = "block";
        }
      } else if (this.classList.contains("promo-slider-back-btn")) {
        if (Slide.previousElementSibling != undefined) {
          Slide.previousElementSibling.style.display = "block";
        } else {
          Slide.parentNode.lastElementChild.style.display = "block";
        }
      }

    });
  };
};

/*Анимация при отправке формы*/
if (document.querySelector(".write-us-popup-submit")) {
  document.querySelector(".write-us-popup-submit").addEventListener("click", function() {
    var fields = document.querySelectorAll(".field-required");
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        fields[i].classList.remove("write-us-popup-field-anim");
        void fields[i].offsetWidth;
        fields[i].classList.add("write-us-popup-field-anim");
      }
    }
  });
};
