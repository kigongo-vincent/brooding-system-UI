// Collapsible navbar logic
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");
navbarToggle.addEventListener("click", () => {
  const isHidden = navbarMenu.classList.contains("hidden");
  if (isHidden) {
    navbarMenu.classList.remove("hidden");
    setTimeout(() => {
      navbarMenu.classList.remove("opacity-0", "scale-95");
      navbarMenu.classList.add("opacity-100", "scale-100");
    }, 10);
  } else {
    navbarMenu.classList.remove("opacity-100", "scale-100");
    navbarMenu.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      navbarMenu.classList.add("hidden");
    }, 250);
  }
});
// Also close menu when clicking a link (mobile UX)
navbarMenu.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("click", () => {
    if (window.innerWidth < 640) {
      navbarMenu.classList.remove("opacity-100", "scale-100");
      navbarMenu.classList.add("opacity-0", "scale-95");
      setTimeout(() => {
        navbarMenu.classList.add("hidden");
      }, 250);
    }
  });
});
// Mobile "Book Now" button triggers modal
document
  .getElementById("open-booking-form-mobile")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("booking-modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });

const navbar = document.getElementById("main-navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});
