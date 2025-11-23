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





document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const phoneInput = document.getElementById("phone");
    const orderNumberInput = document.getElementById("order-number");
    const confirmationPopup = document.createElement("div");
  
    confirmationPopup.id = "confirmation";
    confirmationPopup.className = "confirmation-popup";
    confirmationPopup.innerHTML = `
      <p>Merci ! Votre message a bien été reçu.<br>Nous vous répondrons dans les plus brefs délais.</p>
    `;
    document.body.appendChild(confirmationPopup);
  
    // Empêcher les lettres dans le champ Téléphone
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, ""); // Remplace tout sauf les chiffres
    });
  
    // Forcer les caractères alphanumériques et majuscules pour le numéro de commande
    orderNumberInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    });
  
    // Soumission du formulaire
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      // Afficher le popup de confirmation et le réinitialiser
      confirmationPopup.classList.add("show");
        setTimeout(() => {
        confirmationPopup.classList.remove("show");
      }, 3000);
        contactForm.reset();
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

