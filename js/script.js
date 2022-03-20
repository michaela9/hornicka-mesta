/*HAMBURGER MENU */

const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-120%";
}

/*RIGHT CLICK DISABLE */

$(document).ready(function () {
  $(document).bind("contextmenu", function (e) {
    return false;
  });
});
