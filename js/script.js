document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Footer Year ---
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Dark Mode Toggle ---
    const themeBtn = document.getElementById("theme-toggle");
    
    // Check if the user has a saved preference in their browser
    const currentTheme = localStorage.getItem("theme");

    // If they previously chose dark mode, apply it immediately
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeBtn.textContent = "☀️"; // Change icon to sun
    }

    // Listen for a click on the theme button
    themeBtn.addEventListener("click", () => {
        // Toggle the 'dark-theme' class on the body
        document.body.classList.toggle("dark-theme");

        // Check if dark theme is currently active
        let theme = "light";
        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

        // Save the user's choice to their browser so it persists on reload
        localStorage.setItem("theme", theme);
    });

});