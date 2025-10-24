document.addEventListener('DOMContentLoaded', () => {
  // --- Topnav (hamburger) toggle ---
  const topnav = document.getElementById('myTopnav');
  const icon = document.querySelector('.icon');
  if (icon && topnav) {
    icon.addEventListener('click', () => {
      // toggle 'responsive' on/off
      if (topnav.className === 'topnav') {
        topnav.className = 'topnav responsive';
      } else {
        topnav.className = 'topnav';
      }
    });
  }

  // --- Caret (snack bar) toggle: run once on load ---
  document.querySelectorAll('.caret').forEach(caret => {
    caret.addEventListener('click', function () {
      const nested = this.parentElement.querySelector('.nested');
      if (nested) nested.classList.toggle('active');
      this.classList.toggle('caret-down');
    });
  });

  // --- Optional: only if you actually use .accordion elements ---
  document.querySelectorAll('.accordion').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const p = btn.nextElementSibling;
      if (p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    });
  });
});