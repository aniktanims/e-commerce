/*===== MENU SHOW =====*/
const showMenu = (toggleid, navid) => {
  const toggle = document.querySelector(toggleid),
    nav = document.querySelector(navid);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("#nav-toggle", "#nav-menu");
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((nav) => {
    nav.classList.remove("active");
    this.classList.add("active");
  });

  //remove mobile menu
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((e) => {
  e.addEventListener("click", linkAction);
});
