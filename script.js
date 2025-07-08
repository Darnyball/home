// Inject header and footer for modular layout
window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(html => document.getElementById('header-placeholder').innerHTML = html);

  fetch('footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);
});
