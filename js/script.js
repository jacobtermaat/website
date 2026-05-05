document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Footer Year ---
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Dark Mode Toggle & System Preference ---
    const themeBtn = document.getElementById("theme-toggle");
    
    // Check local storage AND system preferences
    const currentTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Determine if we should start in dark mode
    if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add("dark-theme");
        themeBtn.textContent = "☀️"; // Sun icon for dark mode
    } else {
        themeBtn.textContent = "🌙"; // Moon icon for light mode
    }

    // Listen for a click on the theme button
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        let theme = "light";
        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

        // Save user preference
        localStorage.setItem("theme", theme);
    });

    // Listen for system theme changes in real-time (if user hasn't overridden it)
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

    // --- 3. Scroll Reveal Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});