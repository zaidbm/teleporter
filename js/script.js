// Update year in copyright footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Simple scroll to the right section when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links that point to sections on the same page
  const navLinks = document.querySelectorAll('a[href^="#"]');

  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute('href');

      // Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animation for the teleport buttons in the mockup
  const teleportButtons = document.querySelectorAll('.teleport-btn');

  teleportButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Add a pulse animation class
      this.classList.add('pulse');

      // Remove the class after animation completes
      setTimeout(() => {
        this.classList.remove('pulse');
      }, 500);
    });
  });
});

// Add this CSS rule for the pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .pulse {
    animation: pulse 0.5s ease-in-out;
  }
`;

document.head.appendChild(style);
