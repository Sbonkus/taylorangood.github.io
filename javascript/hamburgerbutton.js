document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      
if (navLinks.classList.contains("active")) {
    hamburger.innerHTML = "✕"; // Close icon
        } else {
        hamburger.innerHTML = "☰"; // Hamburger icon
      }
    });
  }
});
