//<!=====================menu=========================//

const menuActive = document.getElementById("menuActive");
const menu = document.getElementById("menu");
const menuToggle = menu.querySelectorAll("div");
const options = menuActive.querySelectorAll("li");
const sectionP = document.querySelector("section");
const sections = document.querySelectorAll(".sectionArtec");

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

  sectionP.classList.toggle("hidden");
  sectionP.classList.toggle("sm:block");
}

menu.addEventListener("click", activeMenu);

options[0].addEventListener("click", activeMenu);
options[1].addEventListener("click", activeMenu);
options[2].addEventListener("click", activeMenu);
options[3].addEventListener("click", activeMenu);

function efeitoScroll() {
  sections.forEach((item) => {
    const isVisibel = item.getBoundingClientRect().top < window.innerHeight;
    if (isVisibel === true) {
      item.classList.add("aparecer");
    }
  });
}

window.addEventListener("scroll", efeitoScroll);
