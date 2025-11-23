document.getElementById("print-button").addEventListener("click", function () {
    window.print();
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

