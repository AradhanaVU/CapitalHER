document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('mobile-menu-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    document.querySelectorAll('.main-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        if (body.classList.contains('mobile-menu-open')) {
          body.classList.remove('mobile-menu-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.textContent = 'Menu';
        }
      });
    });
  }

  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submission is disabled in this prototype.');
    });
  });
});
