var buyBtns = document.querySelectorAll(".item-buy-btn");
var bookmarkBtns = document.querySelectorAll(".item-bookmark-btn");
var closeBtns = document.querySelectorAll(".close-popup");

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
 