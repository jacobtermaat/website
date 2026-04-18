// Wait for the HTML to fully load before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
    
    // Feature 1: Automatically update the copyright year in the footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // You can add more features here later!
    // For example: A mobile navigation toggle, dark mode, or scroll animations.
    console.log("Website successfully loaded!");
});