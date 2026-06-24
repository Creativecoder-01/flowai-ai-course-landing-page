// TOGGLE NAVBAR


const toggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".navbar-links");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});



// TOGGLE ACCORDION


const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
header.addEventListener("click", () => {
    const body = header.nextElementSibling;

    body.classList.toggle("active");
    header.classList.toggle("active");
})
});