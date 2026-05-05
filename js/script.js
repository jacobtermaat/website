document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Footer Year ---
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Dark Mode Toggle & System Preference ---
    const themeBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add("dark-theme");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        let theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
        localStorage.setItem("theme", theme);
    });

    prefersDarkScheme.addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            if (e.matches) {
                document.body.classList.add("dark-theme");
                themeBtn.textContent = "☀️";
            } else {
                document.body.classList.remove("dark-theme");
                themeBtn.textContent = "🌙";
            }
        }
    });

    // --- 3. Mobile Hamburger Menu ---
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenu.classList.toggle("is-active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenu.classList.remove("is-active");
        });
    });

    // --- 4. Typed.js Initialization ---
    // Make sure the element exists before initializing to prevent errors
    if (document.getElementById("typed")) {
        new Typed("#typed", {
            strings: [
                "Computer Engineer",  
                "Software Developer", 
                "Volleyball Enthusiast"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // --- 5. Scroll Reveal Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});