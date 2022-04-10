//<!=====================menu=========================//

const menuActive = document.getElementById("menuActive");
const menu = document.getElementById("menu");
const menuToggle = menu.querySelectorAll("div");
/*const header = document.querySelector("header");
const section = document.querySelector("section");
const footer = document.querySelector("footer");
*/

function activeMenu() {
  menuToggle[0].classList.toggle("translate-y-2");
  menuToggle[0].classList.toggle("w-2/4");
  menuToggle[0].classList.toggle("w-full");
  menuToggle[1].classList.toggle("translate-y-2");
  menuToggle[2].classList.toggle("translate-y-2");

  menuToggle[0].classList.toggle("rotate-45");
  menuToggle[1].classList.toggle("rotate-90");
  menuToggle[1].classList.toggle("translate-x-7");
  menuToggle[1].classList.toggle("translate-y-[-100px]");
  menuToggle[2].classList.toggle("rotate-[-45deg]");

  menuActive.classList.toggle("hidden");
}

menu.addEventListener("click", activeMenu);

const seguinte = document.getElementById("seguinte");

function mudarConteudoPrincipal() {
  alert("oi");
}

seguinte.addEventListener("click", mudarConteudoPrincipal);
