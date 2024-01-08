document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll(".nav-menu-link");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");

        if (navMenu.classList.contains("nav-menu_visible")) {
            navToggle.setAttribute("aria-label", "Cerrar menú");
        } else {
            navToggle.setAttribute("aria-label", "Abrir menú");
        }
    });

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Mostrar solo la sección correspondiente al ícono clicado
            sections[index].style.display = "block";

            // Cerrar el menú al hacer clic en un enlace (opcional)
            navMenu.classList.remove("nav-menu_visible");
            navToggle.setAttribute("aria-label", "Abrir menú");
        });
    });
});
