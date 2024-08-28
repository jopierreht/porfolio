// script.js
    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuSlide = document.querySelector(".menu-slide");
        let isMenuOpen = false;

        menuToggle.addEventListener("click", function() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menuSlide.classList.add("show");
                menuToggle.innerHTML = "&times;"; // Change to 'X' icon
            } else {
                menuSlide.classList.remove("show");
                menuToggle.innerHTML = "&#9776;"; // Change back to hamburger icon
            }
        });
    });

