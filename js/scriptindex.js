
var buyBtns = document.querySelectorAll(".item-buy-btn");
var bookmarkBtns = document.querySelectorAll(".item-bookmark-btn");
var closeBtns = document.querySelectorAll(".close-popup");
var slideBtns = document.querySelectorAll(".services-slider-item");
var promoSlideBtns = document.querySelectorAll(".promo-slider-btn");


/*Попап Добавлено в корзину Открыть*/
for (var i = 0; i < buyBtns.length; i++) {
	buyBtns[i].addEventListener("click", function(event) {
		document.querySelector(".cart-add-popup").classList.remove("visually-hidden");
		document.querySelector(".cart-add-popup").classList.add("show");
		document.querySelector(".popup-overlay").classList.remove("visually-hidden");
		event.preventDefault();
	});
};

/*Ховер карточки 
for (var i = 0; i < buyBtns.length; i++) {
	buyBtns[i].parentNode.parentNode.addEventListener("focus", function() {
		this.classList.add("focus");
	});
	bookmarkBtns[i].addEventListener("blur", function() {
		this.parentNode.parentNode.classList.remove("focus");
	});
} */

/*Все попапы - Закрыть*/
 for (var i = 0; i < closeBtns.length; i++) {
 	closeBtns[i].addEventListener("click", function() {
 			this.parentNode.classList.add("visually-hidden");
 			this.parentNode.classList.remove("show");
 			document.querySelector(".popup-overlay").classList.add("visually-hidden");
 	});
 }
 
/*Попап с картой Открыть*/
document.querySelector(".map-thumbnail").addEventListener("click", function(event) {
	document.querySelector(".map-popup").classList.remove("visually-hidden");
	document.querySelector(".map-popup").classList.add("show");
	document.querySelector(".popup-overlay").classList.remove("visually-hidden");
	event.preventDefault();
});

/*Попап пишите нам Открыть*/
document.querySelector(".contact-info-write-us-btn").addEventListener("click", function(event) {
	document.querySelector(".write-us-popup").classList.remove("visually-hidden");
	document.querySelector(".write-us-popup").classList.add("show");
	document.querySelector(".popup-overlay").classList.remove("visually-hidden");
	event.preventDefault();
});


/*СЛАЙДЕР - СЕРВИСЫ*/
for (var i = 0; i < slideBtns.length; i++) {
	slideBtns[i].addEventListener("click", function() {
		var Services = document.getElementsByClassName("service-description-item"), i;
        	for (var i = 0; i < Services.length; i ++) {
			    Services[i].style.display = 'none';
			}
			var ServicesLinks = document.getElementsByClassName("services-slider-item"), i;
			for (var i = 0; i < ServicesLinks.length; i ++) {
			    ServicesLinks[i].classList.remove("services-slider-item-active");
			}

			this.classList.add("services-slider-item-active");
        	this.classList.remove("services-slider-item-normal");

        	if (this.innerHTML == "Гарантия") {
        		document.getElementById('warrantydescript').style.display = "block";
        	}
        	else if (this.innerHTML == "Доставка") {
        		document.getElementById('deliverydescript').style.display = "block";	
        	}
        	else if (this.innerHTML == "Кредит") {
        		document.getElementById('creditdescript').style.display = "block";
        	}
	});
};

/*СЛАЙДЕР - ПРОМО*/
for (var i = 0; i < promoSlideBtns.length; i++) {
	promoSlideBtns[i].addEventListener("click", function() {

		 var Slides = document.getElementsByClassName("promo-item-slider"), i;
        	for (var i = 0; i < Slides.length; i ++) {
			    Slides[i].style.display = 'none';
			} 

			var Slide = this.parentNode;
				if (this.classList.contains("promo-slider-forward-btn")) {
						if (Slide.nextElementSibling != undefined) {
						Slide.nextElementSibling.style.display = "block";
								}	
						else {
							Slide.parentNode.firstElementChild.style.display = "block";
						}
				}
				else if (this.classList.contains("promo-slider-back-btn")) {
					if (Slide.previousElementSibling != undefined) {
						Slide.previousElementSibling.style.display = "block";
					}
					else {
						Slide.parentNode.lastElementChild.style.display = "block";
					}
				}		  	

	});
};

 