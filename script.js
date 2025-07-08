// Inject header, footer, and modal for modular layout
window.addEventListener('DOMContentLoaded', () => {
  injectHTML('header-placeholder', 'header.html');
  injectHTML('footer-placeholder', 'footer.html');
  injectHTML('contact-modal', 'contact-modal.html');
});

// Helper function to load HTML into an element
function injectHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      // Only after modal loads, define modal functions
      if (id === 'contact-modal') {
        window.openModal = function () {
          const modal = document.getElementById("contactModal");
          if (modal) modal.style.display = "flex";
        };

        window.closeModal = function () {
          const modal = document.getElementById("contactModal");
          if (modal) modal.style.display = "none";
        };

        window.onclick = function (event) {
          const modal = document.getElementById("contactModal");
          if (event.target === modal) {
            modal.style.display = "none";
          }
        };
      }
    });
}

// Toggle mobile navigation
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("active");
  }
}
