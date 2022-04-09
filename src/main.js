//<!=====================menu=========================//

const menuActive = document.getElementById("menuActive");
const menu = document.getElementById("menu");
const menuToggle = menu.querySelectorAll("div");

function activeMenu() {
  menuToggle[0].classList.toggle("translate-y-2");
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
