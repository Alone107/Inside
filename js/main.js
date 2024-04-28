let btn = document.querySelector(".header__btn");
let popup = document.querySelector(".popup");
let shadow = document.querySelector(".shadow");
let burger = document.querySelector(".header__burger");
let close = document.querySelector(".close");
// console.log(burger)

function popupOpen() {
  popup.classList.remove("popup-open");
  shadow.classList.remove("shadow-open");
}
btn.addEventListener("click", popupOpen);

function shadowClose() {
  popup.classList.add("popup-open");
  shadow.classList.add("shadow-open");
}
shadow.addEventListener("click", shadowClose);

function burgerOpen() {
  document.querySelector(".burger").classList.remove("burger-close");
}

function burgerClose() {
  document.querySelector(".burger").classList.add("burger-close");
}

close.addEventListener("click", burgerClose);

burger.addEventListener("click", burgerOpen);


document
  .getElementById("main-link")
  .addEventListener("click", burgerClose);
document
  .getElementById("uslugi-link")
  .addEventListener("click", burgerClose);
document
  .getElementById("why-link")
  .addEventListener("click", burgerClose);
document
  .getElementById("work-link")
  .addEventListener("click", burgerClose);
