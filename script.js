// script.js

// Example: Display a simple alert when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('AdoptKnoxDogs website loaded!');

    // You can add more JavaScript functionality here, such as:
    // - Image slideshows
    // - Interactive maps of shelter locations
    // - Form validation for contact forms
    // - Dynamic dog filtering based on breed or age
});

// Example: Function to change the background color of a section on click (for demonstration)
function changeSectionColor(sectionId, color) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.backgroundColor = color;
    }
}

// You can call this function from HTML, for example:
// <button onclick="changeSectionColor('about', 'lightyellow')">Change About Section Color</button>
