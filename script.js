document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const panel = document.getElementById('mobile-nav');

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('hidden');
      toggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('mobile-nav-open', !isOpen);
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        panel.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-nav-open');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('mobile-nav-open');
      }
    });
  }

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (form.id === 'contact-form' && form.action.includes('formspree.io')) {
        return;
      }
      event.preventDefault();
      if (form.id === 'apply-form') {
        alert(
          'Thanks for your interest! For official applications, please use the Google Form linked on this page.',
        );
      } else if (form.id === 'contact-form') {
        alert(
          'Contact form is not configured yet. Email thivya.jeyapalan@capitalher.ca or finish Formspree setup in generate-site.mjs.',
        );
      } else {
        alert('Form submitted (preview mode).');
      }
      form.reset();
    });
  });
});
