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
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", () => {
        // Toggle active class for the current item
        item.classList.toggle("active");
  
        // Close other items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
      });
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

