const hamburger = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Add responsive navbar functionality
hamburger.addEventListener("click", () => {
  let isOpen = primaryNav.getAttribute("data-visible");
  console.log(isOpen);
  if (isOpen === "false") {
    primaryNav.style.transform = "translateX(0)";
    primaryNav.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
  } else {
    primaryNav.style.transform = "translateX(100%)";
    primaryNav.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
  }
});
