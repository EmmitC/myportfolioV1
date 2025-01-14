// Dark mode toggle functionality
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change background image based on the mode
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundImage = "url('images/20250101_211343.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/20250101_211343.jpg')";
    }
});

// Scroll visibility check for sections
const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();  // Check visibility initially
