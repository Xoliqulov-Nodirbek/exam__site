var elMenu = document.querySelector(".header__menu--img");
var elBody = document.querySelector("body");

elMenu.addEventListener("click", function(){
    elBody.classList.toggle(".nav__list");
})