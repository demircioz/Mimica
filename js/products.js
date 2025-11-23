// Bouton retour en haut
const backToTopButton = document.getElementById("back-to-top");

// Afficher/Masquer le bouton au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) { // Affiche le bouton après 300px
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Animation pour remonter en haut de la page
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});



// Sélectionne le formulaire et le pop-up
const newsletterForm = document.getElementById("newsletter-bar-form");
const newsletterPopup = document.getElementById("newsletter-popup");

// Ajoute un écouteur d'événement au formulaire
newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    // Empêche le rechargement de la page (voir le tuto sur YouTube que j'ai envoyé)
    newsletterPopup.classList.add("show");
    setTimeout(() => {
        newsletterPopup.classList.remove("show");
    }, 3000);
    newsletterForm.reset();
});



document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number");
  
    numbers.forEach((number) => {
      const target = +number.getAttribute("data-target");
      const increment = target / 100;
  
      let count = 0;
  
      const updateNumber = () => {
        count += increment;
        if (count < target) {
          number.textContent = Math.floor(count);
          requestAnimationFrame(updateNumber);
        } else {
          number.textContent = target;
        }
      };
  
      updateNumber();
    });
  });
  

  

// Menu hamburger (miam j'ai faim et on est en retard)

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const aproposToggle = document.querySelector(".dropdown-toggle");
  const submenuApropos = document.getElementById("submenu-apropos");

  // Gestion du menu hamburger
  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("active");
  });

  // Gestion du sous-menu "À Propos"
  aproposToggle.addEventListener("click", (e) => {
      e.preventDefault();
      submenuApropos.classList.toggle("active");
  });
});

