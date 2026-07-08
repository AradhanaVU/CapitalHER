import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const TEAM_ROSTER = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'team', 'roster.json'), 'utf8'),
);
const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd05Qeqg9gSUNQsjSdl7lFkYlrqMrm3-Okaku0NjvJ37YdCRg/viewform?usp=sharing';
const TEAM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeTkpHwhUUqXvEp2j4OgiIvYOBcBkEqrtqHJG3Cn-ywCQhUuA/viewform?usp=sharing';
/** Formspree form ID from https://formspree.io (endpoint: https://formspree.io/f/YOUR_ID) */
const FORMSPREE_ID = 'mrednegz';
const SOCIAL_INSTAGRAM = 'https://www.instagram.com/itscapitalher/';
const SOCIAL_TIKTOK = 'https://www.tiktok.com/@itscapitalher';
const SOCIAL_LINKEDIN = 'https://www.linkedin.com/company/capitalher/';
/** LightWidget iframe src after connecting @itscapitalher at https://lightwidget.com (free, auto-updates). */
const INSTAGRAM_LIGHTWIDGET_SRC = '';

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 transition-transform group-hover:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>`;
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;

const socialInstagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`;
const socialTiktokIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`;
const socialLinkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const socialEmailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;

const FOOTER_SOCIAL_LINK_STYLE =
  'display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:9999px;border:1px solid rgba(227,219,206,0.25);color:rgba(227,219,206,0.88);transition:color .2s,border-color .2s,background .2s';
const FOOTER_PARTNERS_STYLE =
  'border-top:1px solid rgba(227,219,206,0.12);padding-top:1.5rem;margin-top:1rem;display:flex;flex-wrap:wrap;align-items:center;gap:1.25rem';
const FOOTER_PARTNER_IMG_STYLE =
  'height:3rem;width:auto;max-width:11rem;object-fit:contain;opacity:0.92';

const footerPartners = `
      <div class="footer-partners" style="${FOOTER_PARTNERS_STYLE}">
        <img src="assets/partners/york-region-food-network.png" alt="York Region Food Network" style="${FOOTER_PARTNER_IMG_STYLE}" />
        <img src="assets/partners/we.png" alt="WE" style="${FOOTER_PARTNER_IMG_STYLE};height:2.25rem;max-width:4rem" />
        <img src="assets/partners/ontario-trillium-foundation.png" alt="Ontario Trillium Foundation — An agency of the Government of Ontario" style="${FOOTER_PARTNER_IMG_STYLE};height:3.25rem;max-width:16rem" />
        <img src="assets/partners/dawn-canada.png" alt="DAWN Canada" style="${FOOTER_PARTNER_IMG_STYLE};height:2.75rem;max-width:9rem" />
      </div>`;

function head(title, description) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="assets/styles-BcEXsczJ.css" />
  <link rel="stylesheet" href="assets/site.css" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
</head>`;
}

function header(active = {}) {
  const navClass = (key) =>
    active[key] ? 'text-foreground' : 'text-muted-foreground hover:text-foreground';
  return `<body>
<div class="min-h-screen flex flex-col">
<header class="site-header sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
  <div class="container-x flex items-center justify-between py-4">
    <a class="flex items-center gap-2 group" href="index.html">
      <img src="LogoBurgundy.png" alt="CapitalHER Logo" class="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
    </a>
    <nav class="hidden md:flex items-center gap-1 text-sm">
      <a class="px-3 py-2 transition-colors ${navClass('home')}" href="index.html">Home</a>
      <div class="relative group">
        <a class="inline-flex items-center gap-1 px-3 py-2 transition-colors ${navClass('about')}" href="about.html">About ${chevron}</a>
        <div class="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-0 top-full pt-2 min-w-56">
          <div class="rounded-2xl border border-border/60 bg-popover shadow-card overflow-hidden p-1.5">
            <a class="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60" href="about.html">About Us</a>
            <a class="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60" href="about-story.html">Our Story</a>
            <a class="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60" href="about-team.html">Our Team</a>
          </div>
        </div>
      </div>
      <a class="px-3 py-2 transition-colors ${navClass('programs')}" href="programs.html">Programs</a>
      <a class="px-3 py-2 transition-colors ${navClass('impact')}" href="impact.html">Impact</a>
      <div class="relative group">
        <a class="inline-flex items-center gap-1 px-3 py-2 transition-colors ${navClass('involved')}" href="get-involved-program.html">Get Involved ${chevron}</a>
        <div class="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-0 top-full pt-2 min-w-56">
          <div class="rounded-2xl border border-border/60 bg-popover shadow-card overflow-hidden p-1.5">
            <a class="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60" href="get-involved-program.html">Apply to the Program</a>
            <a class="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60" href="get-involved-team.html">Join the Team</a>
          </div>
        </div>
      </div>
      <a class="px-3 py-2 transition-colors ${navClass('contact')}" href="contact.html">Contact</a>
      <a href="${APPLY_URL}" target="_blank" rel="noopener noreferrer" class="ml-2 btn-magenta btn-magenta-sm">Apply</a>
    </nav>
    <button id="mobile-menu-toggle" type="button" class="md:hidden rounded-full p-2 hover:bg-muted" aria-label="Toggle menu" aria-expanded="false">${menuIcon}</button>
  </div>
  <nav id="mobile-nav" class="mobile-nav-panel md:hidden hidden" aria-label="Mobile navigation">
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="index.html">Home</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="about.html">About Us</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="about-story.html">Our Story</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="about-team.html">Our Team</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="programs.html">Programs</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="impact.html">Impact</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="get-involved-program.html">Apply to the Program</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="get-involved-team.html">Join the Team</a>
    <a class="block rounded-xl px-3 py-2.5 text-muted-foreground hover:bg-muted/60" href="contact.html">Contact</a>
    <a class="block rounded-xl px-3 py-2.5 mt-1 text-center btn-magenta btn-magenta-sm justify-center" href="${APPLY_URL}" target="_blank" rel="noopener">Apply</a>
  </nav>
</header>
<main class="flex-1">`;
}

function footer() {
  return `</main>
<footer class="mt-32 border-t border-border/60 bg-foreground text-background">
  <div class="container-x py-16 grid gap-12 md:grid-cols-4">
    <div class="md:col-span-2 space-y-4">
      <img src="LogoCream.png" alt="CapitalHER Logo" class="h-14 w-auto object-contain" />
      <p class="text-background/70 max-w-sm leading-relaxed">Empowering girls through financial literacy and entrepreneurship education!</p>
      <div class="flex gap-3 pt-2" style="display:flex;gap:0.75rem;padding-top:0.5rem">
        <a href="${SOCIAL_INSTAGRAM}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="footer-social-link" style="${FOOTER_SOCIAL_LINK_STYLE}">${socialInstagramIcon}</a>
        <a href="${SOCIAL_TIKTOK}" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="footer-social-link" style="${FOOTER_SOCIAL_LINK_STYLE}">${socialTiktokIcon}</a>
        <a href="${SOCIAL_LINKEDIN}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="footer-social-link" style="${FOOTER_SOCIAL_LINK_STYLE}">${socialLinkedinIcon}</a>
        <a href="mailto:hello@capitalher.ca" aria-label="Email" class="footer-social-link" style="${FOOTER_SOCIAL_LINK_STYLE}">${socialEmailIcon}</a>
      </div>
${footerPartners}
    </div>
    <div>
      <h4 class="text-sm uppercase tracking-widest text-background/50 mb-4 font-medium">Explore</h4>
      <ul class="space-y-2 text-background/80">
        <li><a href="about.html" class="hover:text-background">About Us</a></li>
        <li><a href="programs.html" class="hover:text-background">Programs</a></li>
        <li><a href="impact.html" class="hover:text-background">Impact</a></li>
        <li><a href="contact.html" class="hover:text-background">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-sm uppercase tracking-widest text-background/50 mb-4 font-medium">Get Involved</h4>
      <ul class="space-y-2 text-background/80">
        <li><a href="${APPLY_URL}" target="_blank" rel="noopener" class="hover:text-background">Apply to the Program</a></li>
        <li><a href="get-involved-team.html" class="hover:text-background">Join the Team</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-background/10">
    <div class="container-x py-6 text-center md:text-left text-xs text-background/50">
      <p>© 2026 CapitalHER. A Canadian non-profit.</p>
    </div>
  </div>
</footer>
</div>
<script src="script.js"></script>
</body>
</html>`;
}

function pageHero(eyebrow, titleHtml, subtitle = '', { video } = {}) {
  if (video) {
    return `<section class="relative overflow-hidden border-b border-border/60 page-hero-with-video">
  <style>.page-hero-with-video .text-gradient{background:linear-gradient(135deg,#fff 0%,#f8d4e0 50%,#ffb8d0 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block;padding-right:.06em;padding-bottom:.14em;margin-bottom:-.05em}</style>
  <video style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;filter:brightness(0.72) saturate(0.9)" src="${video}" poster="CapitalHER-10.jpg" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video>
  <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(to bottom,rgba(0,0,0,0.38),rgba(0,0,0,0.26),rgba(0,0,0,0.42));pointer-events:none" aria-hidden="true"></div>
  <div class="container-x py-24 md:py-32" style="position:relative;z-index:2">
    <p class="text-xs uppercase tracking-[0.25em] mb-6" style="color:rgba(255,255,255,0.72)">${eyebrow}</p>
    <h1 class="font-display text-5xl md:text-7xl max-w-4xl page-hero-title home-hero-title" style="line-height:1.15;color:#fff;text-shadow:0 2px 32px rgba(0,0,0,0.55),0 1px 10px rgba(0,0,0,0.45)">${titleHtml}</h1>
    ${subtitle ? `<p class="mt-6 max-w-2xl text-lg leading-relaxed" style="color:rgba(255,255,255,0.9)">${subtitle}</p>` : ''}
  </div>
</section>`;
  }
  return `<section class="relative border-b border-border/60" style="overflow-x:hidden;overflow-y:visible">
  <div class="absolute inset-0 -z-10 opacity-[0.07]" style="background:var(--gradient-sunset)"></div>
  <div class="container-x py-24 md:py-32">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">${eyebrow}</p>
    <h1 class="font-display text-5xl md:text-7xl max-w-4xl page-hero-title" style="line-height:1.15">${titleHtml}</h1>
    ${subtitle ? `<p class="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">${subtitle}</p>` : ''}
  </div>
</section>`;
}

function subnav(items, activeHref) {
  const tabs = items
    .map(
      ([href, label]) =>
        `<a class="px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${href === activeHref ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}" href="${href}">${label}</a>`,
    )
    .join('');
  return `<div class="border-b border-border/60 bg-muted/40"><div class="container-x flex gap-1 overflow-x-auto py-3">${tabs}</div></div>`;
}

function pillarCard(icon, title, text) {
  return `<div class="rounded-3xl border border-border/60 bg-card p-8 hover:shadow-card transition h-full">
    <div class="size-12 rounded-2xl bg-gradient-sunset grid place-items-center text-primary-foreground shadow-glow mb-6">${icon}</div>
    <h3 class="font-display text-2xl mb-2">${title}</h3>
    <p class="text-muted-foreground leading-relaxed">${text}</p>
  </div>`;
}

const GALLERY = {
  workshop: 'assets/gallery/workshop-presentation.jpg',
  community: 'assets/gallery/community-event.jpg',
  pitch: 'assets/gallery/girls-in-motion-pitch.jpg',
  competition: 'assets/gallery/pitch-competition.jpg',
  backdrop: 'assets/gallery/team-backdrop.jpg',
  graduation: 'assets/gallery/cohort-graduation.jpg',
  virtual: 'assets/gallery/virtual-accelerator.jpg',
  contactTeam: 'assets/gallery/contact-team.jpg',
  cohort: 'assets/gallery/community-cohort.jpg',
  workshopActivity: 'assets/gallery/workshop-activity.jpg',
};

function photoFrame(src, alt, aspect = '4/5') {
  return `<div style="border-radius:2rem;overflow:hidden;border:1px solid rgba(43,3,10,0.1);box-shadow:0 8px 32px rgba(43,3,10,0.08);aspect-ratio:${aspect};background:#f5f0eb">
    <img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" />
  </div>`;
}

function photoStrip(title, items) {
  const cells = items
    .map(
      ({ src, alt, caption }) =>
        `<figure style="margin:0">
      <div style="border-radius:1rem;overflow:hidden;aspect-ratio:4/3;background:#f5f0eb;border:1px solid rgba(43,3,10,0.08)">
        <img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" />
      </div>
      ${caption ? `<figcaption style="margin-top:0.625rem;font-size:0.8125rem;color:rgba(43,3,10,0.55);text-align:center">${caption}</figcaption>` : ''}
    </figure>`,
    )
    .join('');
  return `<div class="photo-strip-section" style="margin-top:3rem">
    ${title ? `<p style="font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.14em;color:rgba(43,3,10,0.5);margin:0 0 1rem;font-weight:600;text-align:center">${title}</p>` : ''}
    <div class="photo-strip" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem">${cells}</div>
  </div>`;
}

function photoMosaic(items) {
  const cells = items
    .map(
      ({ src, alt }) =>
        `<div style="border-radius:1.25rem;overflow:hidden;aspect-ratio:4/3;background:#f5f0eb;border:1px solid rgba(43,3,10,0.08)">
      <img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" />
    </div>`,
    )
    .join('');
  return `<div class="photo-mosaic" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem">${cells}</div>`;
}

function splitTextPhoto(textHtml, src, alt, aspect = '4/5') {
  return `<div class="split-text-photo" style="display:grid;grid-template-columns:1fr;gap:2.5rem;align-items:center">
    <div>${textHtml}</div>
    ${photoFrame(src, alt, aspect)}
  </div>`;
}

const icons = {
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
  grad: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="size-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>',
};

const NEWSROOM = [
  {
    title: 'Equipping the next vanguard of Canadian innovation',
    url: 'https://thelogic.co/sponsored-content/equipping-the-next-vanguard-of-canadian-innovation/',
    image: 'assets/newsroom/logic-canadian-innovation.jpg',
    meta: 'Sponsored Content | The Logic',
  },
  {
    title: 'Dawn Canada Hummingbird Award 2025',
    url: 'https://dawncanada.net/thivya-jeyapalan/',
    image: 'assets/newsroom/dawn-hummingbird-award-2025.jpg',
    meta: 'Feature | DAWN Canada',
  },
];

function newsroomCard(article) {
  return `<a href="${article.url}" class="newsroom-item" target="_blank" rel="noopener noreferrer" style="display:flex;gap:1rem;align-items:flex-start;text-decoration:none;color:inherit">
    <img src="${article.image}" alt="" class="newsroom-item-thumb" style="width:5.5rem;height:5.5rem;min-width:5.5rem;object-fit:cover;border-radius:0.2rem;display:block;background:#f5f0eb" loading="lazy" />
    <div style="min-width:0">
      <p style="font-style:italic;font-size:0.8125rem;line-height:1.4;color:rgba(43,3,10,0.55);margin:0">${article.meta}</p>
      <h3 class="font-display" style="font-size:1.0625rem;line-height:1.35;margin:0.45rem 0 0;color:#2b030a">${article.title}</h3>
    </div>
  </a>`;
}

function newsroomSection() {
  const cards = NEWSROOM.map(newsroomCard).join('\n        ');
  return `<div class="newsroom-block" style="margin-top:3rem;padding-top:2.5rem;border-top:1px solid rgba(43,3,10,0.1)">
    <h2 class="font-display text-4xl md:text-5xl" style="text-align:center;margin:0 0 0.75rem;color:#2b030a">Latest <span class="italic text-gradient">Newsroom.</span></h2>
    <p style="text-align:center;font-size:0.875rem;line-height:1.6;color:rgba(43,3,10,0.62);margin:0 auto 2.5rem;max-width:36rem">For media &amp; press inquiries, please email <a href="mailto:thivya.jeyapalan@capitalher.ca" style="color:#9d4a6a;text-decoration:underline">thivya.jeyapalan@capitalher.ca</a></p>
    <div class="newsroom-grid" style="display:grid;grid-template-columns:1fr;gap:2rem;max-width:56rem;margin:0 auto">
        ${cards}
    </div>
    <style>@media(min-width:768px){.newsroom-block .newsroom-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:2.5rem 3rem;max-width:none!important}}.newsroom-item:hover h3{color:#9d4a6a!important}</style>
  </div>`;
}

function instagramFeedEmbed() {
  if (INSTAGRAM_LIGHTWIDGET_SRC) {
    return `<div class="instagram-feed-wrap">
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="${INSTAGRAM_LIGHTWIDGET_SRC}"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget instagram-feed-iframe"
        title="Latest posts from @itscapitalher on Instagram"
      ></iframe>
    </div>`;
  }
  return `<div class="instagram-feed-placeholder">
      <p class="text-muted-foreground text-sm max-w-xl mx-auto">Latest posts from <a href="${SOCIAL_INSTAGRAM}" class="text-magenta hover:underline" target="_blank" rel="noopener noreferrer">@itscapitalher</a> will appear here once the feed widget is connected (one-time setup at <a href="https://lightwidget.com" class="text-magenta hover:underline" target="_blank" rel="noopener noreferrer">LightWidget</a> — free, updates automatically).</p>
      <a href="${SOCIAL_INSTAGRAM}" target="_blank" rel="noopener noreferrer" class="btn-magenta btn-magenta-sm mt-6 inline-flex">Follow on Instagram ${arrow}</a>
    </div>`;
}

function teamCard({ name, role, photo, linkedin = '' }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
  const photoPath = photo ? path.join(ROOT, photo) : '';
  const hasPhoto = photo && fs.existsSync(photoPath);
  const photoSrc =
    hasPhoto ? `${photo}?v=${Math.floor(fs.statSync(photoPath).mtimeMs)}` : '';
  const img = hasPhoto
    ? `<img src="${photoSrc}" alt="${name}" class="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100" loading="lazy" />`
    : `<div class="team-placeholder" aria-hidden="true">${initials}</div>`;
  const linkedinLink = linkedin
    ? `<a href="${linkedin}" class="linkedin inline-flex mt-2" target="_blank" rel="noopener noreferrer" aria-label="${name} on LinkedIn">${linkedinIcon}</a>`
    : '';
  const roleLine = role
    ? `<p class="text-primary/80 text-xs font-medium uppercase tracking-wider mt-1">${role}</p>`
    : '';
  return `<li class="group flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2">
    <div class="aspect-square w-full rounded-sm overflow-hidden bg-primary/10 relative team-photo-frame">${img}</div>
    <div class="team-member-meta">
      <p class="font-subheading text-xl md:text-2xl text-primary tracking-wide team-member-name">${name}</p>
      ${roleLine}
      ${linkedinLink}
    </div>
  </li>`;
}

function indexPage() {
  return `${head('CapitalHER — Helping Girls Turn Ideas Into Impact', 'Canadian nonprofit helping girls aged 13–18 turn ideas into impact through entrepreneurship, financial literacy, and leadership.')}
${header({ home: true })}
<section class="relative h-[92vh] min-h-[640px] w-full overflow-hidden home-hero">
  <video class="home-hero-video absolute inset-0 h-full w-full object-cover" src="captialherrecap.mp4" poster="CapitalHER-10.jpg" autoplay muted loop playsinline preload="metadata" aria-hidden="true" style="filter:brightness(0.58) saturate(0.85)"></video>
  <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(to bottom,rgba(0,0,0,0.52),rgba(0,0,0,0.38),rgba(0,0,0,0.55));pointer-events:none" aria-hidden="true"></div>
  <div class="relative z-10 h-full container-x flex flex-col justify-end pb-20 md:pb-28 text-background">
    <h1 class="font-display text-5xl md:text-8xl tracking-tight max-w-5xl home-hero-title" style="line-height:1.12">Helping girls turn <span class="italic text-gradient">ideas into impact</span></h1>
    <p class="mt-8 text-lg md:text-xl text-background/90 max-w-2xl leading-relaxed drop-shadow-sm">CapitalHER is teaching the next generation of girls how to build impact, launch businesses, and lead with confidence.</p>
    <div class="mt-10 flex flex-wrap gap-4">
      <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta btn-magenta-lg">Apply to the Program ${arrow}</a>
      <a href="programs.html" class="btn-hero-outline">Explore programs</a>
    </div>
  </div>
</section>

<section class="container-x py-24">
  <div class="max-w-3xl mb-16">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">What we do</p>
    <h2 class="font-subheading text-4xl md:text-6xl leading-[1.05]">CapitalHER is built around <span class="italic text-gradient">three foundations</span></h2>
  </div>
  <div class="grid md:grid-cols-3 gap-6">
    ${pillarCard(icons.briefcase, 'Entrepreneurship', 'Learn how to transform ideas into ventures, initiatives, and solutions that create real-world impact.')}
    ${pillarCard(icons.grad, 'Financial Literacy', 'Build the financial confidence needed to make informed decisions, manage money, and achieve long-term goals.')}
    ${pillarCard(icons.users, 'Leadership', 'Develop the communication, collaboration, and problem-solving skills needed to lead with confidence.')}
  </div>
  <div class="home-foundations-photos" style="margin-top:3rem;display:grid;grid-template-columns:1fr;gap:1.25rem">
    <figure style="margin:0">
      ${photoFrame(GALLERY.pitch, 'Participant pitching at CapitalHER', '16/10')}
      <figcaption style="margin-top:0.75rem;font-size:0.8125rem;color:rgba(43,3,10,0.55);text-align:center">Pitch nights &amp; Solutions Showcase</figcaption>
    </figure>
    <figure style="margin:0">
      ${photoFrame(GALLERY.cohort, 'CapitalHER cohort at a community workshop', '16/10')}
      <figcaption style="margin-top:0.75rem;font-size:0.8125rem;color:rgba(43,3,10,0.55);text-align:center">Community workshops &amp; cohort events</figcaption>
    </figure>
  </div>
  <style>@media(min-width:768px){.home-foundations-photos{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(min-width:992px){.split-text-photo{grid-template-columns:1.05fr 0.95fr!important}}</style>
</section>

<section class="container-x py-24 grid lg:grid-cols-12 gap-12 items-center">
  <div class="lg:col-span-6">
    ${photoFrame(GALLERY.competition, 'CapitalHER pitch competition', '4/5')}
  </div>
  <div class="lg:col-span-6">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Our flagship program</p>
    <h2 class="font-subheading text-4xl md:text-6xl leading-[1.05] mb-6">The CapitalHER <span class="italic text-gradient">Accelerator</span></h2>
    <p class="text-lg text-muted-foreground leading-relaxed mb-8">A free 12-week program designed to help girls aged 13–18 build confidence, develop practical skills, and create meaningful impact in their communities. Through interactive workshops, mentorship, and hands-on projects, participants learn how to turn ideas into action.</p>
    <ul class="space-y-3 mb-8 text-muted-foreground">
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> Weekly workshops in financial literacy, entrepreneurship, and leadership</li>
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> Mentorship from female founders, professionals, and community leaders</li>
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> Hands-on projects focused on solving real-world challenges</li>
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> Networking opportunities with inspiring women across industries</li>
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> A capstone project and final Solutions Showcase to present ideas, initiatives, and impact</li>
      <li class="flex gap-3"><span class="text-magenta font-bold">•</span> Flexible virtual participation, with in-person events and experiences throughout the year</li>
    </ul>
    <a href="programs.html" class="btn-magenta">Program details ${arrow}</a>
  </div>
</section>

<section class="container-x py-24">
  <h2 class="font-display text-4xl md:text-5xl mb-12">Voices from Our Community</h2>
  <div class="grid md:grid-cols-3 gap-6">
    <figure class="rounded-3xl bg-card p-8 shadow-card border border-border/60 flex flex-col gap-4">
      <span class="font-display text-6xl leading-none text-gradient">"</span>
      <blockquote class="text-lg leading-relaxed flex-1">Before CapitalHER, I would avoid opportunities that involved public speaking. The pitch competition pushed me outside my comfort zone, and for the first time, I felt confident sharing my ideas with others.</blockquote>
      <figcaption><div class="font-medium">T.K.</div><div class="text-sm text-muted-foreground">Cohort 1 Participant</div></figcaption>
    </figure>
    <figure class="rounded-3xl bg-card p-8 shadow-card border border-border/60 flex flex-col gap-4">
      <span class="font-display text-6xl leading-none text-gradient">"</span>
      <blockquote class="text-lg leading-relaxed flex-1">I joined CapitalHER because I was curious about entrepreneurship, but I left with so much more than that. The workshops helped me understand how to turn ideas into action.</blockquote>
      <figcaption><div class="font-medium">A.S.</div><div class="text-sm text-muted-foreground">Cohort 2 Participant</div></figcaption>
    </figure>
    <figure class="rounded-3xl bg-card p-8 shadow-card border border-border/60 flex flex-col gap-4">
      <span class="font-display text-6xl leading-none text-gradient">"</span>
      <blockquote class="text-lg leading-relaxed flex-1">What stood out most to me was the community. Everyone was supportive, ambitious, and genuinely excited to help each other succeed.</blockquote>
      <figcaption><div class="font-medium">M.R.</div><div class="text-sm text-muted-foreground">Cohort 3 Participant</div></figcaption>
    </figure>
  </div>
</section>

<section class="container-x pb-24">
  <div class="rounded-[2.5rem] bg-foreground text-background p-12 md:p-20 relative overflow-hidden">
    <div class="relative max-w-2xl z-10">
      <h2 class="font-subheading text-5xl md:text-6xl leading-[1.05]">Join the CapitalHER <span class="italic text-gradient">community</span> today</h2>
      <p class="mt-6 text-background/70 text-lg">Whether you're looking to participate, volunteer, mentor, or support our mission, we would love to hear from you.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="get-involved-program.html" class="btn-cta-outline">Get Involved ${arrow}</a>
        <a href="contact.html" class="btn-cta-outline">Talk to Us</a>
      </div>
    </div>
  </div>
</section>
${footer()}`;
}

function aboutPage() {
  return `${head('About Us — CapitalHER', 'CapitalHER helps girls aged 13–18 develop confidence, skills, and support to become leaders and changemakers.')}
${header({ about: true })}
${subnav([['about.html', 'About Us'], ['about-story.html', 'Our Story'], ['about-team.html', 'Our Team']], 'about.html')}
${pageHero('About Us', 'Helping Girls Turn <span class="italic text-gradient">Ideas Into Impact</span>', 'CapitalHER is a Canadian nonprofit helping girls aged 13–18 develop the confidence, skills, and support network to become leaders, entrepreneurs, and changemakers.', { video: 'captialherinterview.mp4' })}

<section class="container-x py-24 about-stack">
  ${splitTextPhoto(
    `<div class="max-w-3xl">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Our Story</p>
    <h2 class="font-display text-4xl md:text-5xl mb-4">One Girl. One Idea. One Opportunity.</h2>
    <p class="text-lg text-muted-foreground leading-relaxed">Every girl has the potential to create change. Yet too many young women grow up without access to mentorship, entrepreneurial education, or opportunities to build confidence in their ideas. CapitalHER was created to change that.</p>
  </div>`,
    GALLERY.backdrop,
    'CapitalHER team at a community event',
    '3/2',
  )}

  <div class="grid md:grid-cols-2 gap-8" style="margin-top:4.5rem">
    <div>
      <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Mission</p>
      <h3 class="font-display text-3xl mb-4">Empower girls to build, lead, and create change.</h3>
      <p class="text-muted-foreground leading-relaxed">We equip young women with the entrepreneurial mindset, financial confidence, and leadership skills needed to pursue their goals and make an impact in the world around them.</p>
    </div>
    <div>
      <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Vision</p>
      <h3 class="font-display text-3xl mb-4">A future where every girl believes her ideas matter.</h3>
      <p class="text-muted-foreground leading-relaxed">We envision a world where young women have the confidence, support, and opportunities to turn their ideas into action and become leaders in their communities, careers, and beyond.</p>
    </div>
  </div>

  <div style="margin-top:5rem">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground" style="margin-bottom:2rem">Values</p>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="value-card"><div><h4 class="font-display text-xl mb-1">Build Boldly</h4><p class="text-muted-foreground text-sm">We encourage girls to take initiative, embrace challenges, and bring their ideas to life.</p></div></div>
      <div class="value-card"><div><h4 class="font-display text-xl mb-1">Learn by Doing</h4><p class="text-muted-foreground text-sm">Growth happens through action. We believe in hands-on experiences that develop real-world skills.</p></div></div>
      <div class="value-card"><div><h4 class="font-display text-xl mb-1">Lift Others Up</h4><p class="text-muted-foreground text-sm">We succeed together. Mentorship, collaboration, and community are at the heart of everything we do.</p></div></div>
      <div class="value-card"><div><h4 class="font-display text-xl mb-1">Lead with Purpose</h4><p class="text-muted-foreground text-sm">We empower girls to use their talents and ideas to create meaningful impact.</p></div></div>
    </div>
  </div>
</section>

<section class="bg-muted/40 border-y border-border/60 py-24">
  <div class="container-x">
    <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Media Labs</p>
    <h2 class="font-display text-4xl md:text-5xl mb-6">Follow our <span class="italic text-gradient">community</span></h2>
    <p class="text-muted-foreground mb-8 max-w-2xl">Connect with CapitalHER on social media for stories, highlights, and updates from our participants and team.</p>
    <div class="media-labs-grid">
      <a href="${SOCIAL_INSTAGRAM}" class="media-link-card" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="${SOCIAL_TIKTOK}" class="media-link-card" target="_blank" rel="noopener noreferrer">TikTok</a>
      <a href="${SOCIAL_LINKEDIN}" class="media-link-card" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    ${newsroomSection()}
  </div>
</section>
${footer()}`;
}

function aboutStoryPage() {
  return `${head('Our Story — CapitalHER', 'How CapitalHER began and grew into a national community for ambitious girls.')}
${header({ about: true })}
${subnav([['about.html', 'About Us'], ['about-story.html', 'Our Story'], ['about-team.html', 'Our Team']], 'about-story.html')}
${pageHero('Our Story', 'It started with one belief: <span class="italic text-gradient">girls can create change</span>')}

<section class="container-x py-16 max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
  <p>CapitalHER was founded by Thivya Jeyapalan, an entrepreneur and student at the University of Pennsylvania's Wharton School in 2023.</p>
  <p>Growing up, Thivya was surrounded by ambitious young women with ideas worth pursuing — girls who wanted to launch businesses, lead initiatives, solve problems in their communities, and create meaningful change.</p>
  <p>Too often, young women are told they can be anything. Far fewer are shown how to get there. So she built the community she wished existed.</p>
  <p>CapitalHER was envisioned to be a place where girls could develop entrepreneurial skills, build confidence, connect with mentors, and transform ideas into action.</p>
  <p class="font-display text-2xl text-foreground">Ambition can and should meet action.</p>
</section>

<section class="container-x" style="padding-bottom:2rem">
  ${photoFrame(GALLERY.community, 'CapitalHER community presentation', '21/9')}
  <p class="text-sm text-muted-foreground mt-3 text-center">Community events, workshops, and showcases bring participants together in person and online.</p>
</section>

<section class="container-x pb-16">
  <div class="rounded-[2rem] overflow-hidden border border-border/60 shadow-card aspect-video bg-muted">
    <video class="w-full h-full object-cover" src="captialherinterview.mp4" poster="CapitalHER-10.jpg" controls playsinline preload="metadata"></video>
  </div>
  <p class="text-sm text-muted-foreground mt-4 text-center">Watch how CapitalHER began and hear directly from participants, mentors, and community members who make our work possible.</p>
</section>

<section class="container-x py-24">
  <h2 class="font-display text-4xl md:text-5xl mb-12">The Road So Far</h2>
  <div class="timeline">
    <div class="timeline-item"><div class="year">2023</div><div><h3 class="font-display text-xl mb-2">The Idea</h3><p class="text-muted-foreground">While still in high school, Thivya began exploring: What would happen if every girl had access to the mentorship, skills, and community needed to pursue her biggest ideas?</p></div></div>
    <div class="timeline-item"><div class="year">2024</div><div><h3 class="font-display text-xl mb-2">The First Cohort</h3><p class="text-muted-foreground">CapitalHER welcomed its first cohort through workshops in entrepreneurship, financial literacy, leadership, and problem-solving — concluding in a leadership summit.</p></div></div>
    <div class="timeline-item"><div class="year">2025</div><div><h3 class="font-display text-xl mb-2">Building a Community</h3><p class="text-muted-foreground">As participants, mentors, volunteers, and partners joined, CapitalHER expanded programming, events, and career treks.</p></div></div>
    <div class="timeline-item"><div class="year">2026</div><div><h3 class="font-display text-xl mb-2">Expanding Opportunities</h3><p class="text-muted-foreground">With support from educators, mentors, sponsors, and partners, CapitalHER continued growing across Canada — helping girls turn ideas into impact.</p></div></div>
    <div class="timeline-item"><div class="year">Today</div><div><h3 class="font-display text-xl mb-2">Building the Future</h3><p class="text-muted-foreground mb-4">Get involved with CapitalHER's Cohort 3 or join the team to help us grow.</p>
      <div class="flex flex-wrap gap-3">
        <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta">Apply to Cohort 3 ${arrow}</a>
        <a href="get-involved-team.html" class="btn-plum">Join the Team</a>
      </div>
    </div></div>
  </div>
</section>
${footer()}`;
}

function execTeamGrid(members) {
  const cards = members.map((m) => teamCard(m)).join('');
  const lastRowCount = members.length % 4 || 4;
  const centerLastPair = lastRowCount === 2;
  return `<ul class="team-exec-grid" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem;list-style:none;padding:0;margin:0 auto 0;width:100%;max-width:72rem">${cards}</ul>
  <style>
  @media(min-width:768px){.team-exec-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:2rem!important}${centerLastPair ? '.team-exec-grid>li:nth-last-child(2){grid-column:2}.team-exec-grid>li:last-child{grid-column:3}' : ''}}
  @media(max-width:767px){.team-exec-grid{gap:1.25rem!important}.team-exec-grid .team-member-name{font-size:0.9375rem;line-height:1.3;letter-spacing:0}}
  .team-exec-grid>li{min-width:0}
  </style>`;
}

function aboutTeamPage() {
  const leadership = TEAM_ROSTER.slice(0, 3);
  const executives = TEAM_ROSTER.slice(3);
  const leadershipGrid = leadership.map((m) => teamCard(m)).join('');
  const execGrid = execTeamGrid(executives);
  return `${head('Our Team — CapitalHER', 'Meet the leaders behind CapitalHER.')}
${header({ about: true })}
${subnav([['about.html', 'About Us'], ['about-story.html', 'Our Story'], ['about-team.html', 'Our Team']], 'about-team.html')}
${pageHero('Our Team', 'The leaders behind <span class="italic text-gradient">CapitalHER</span>', 'A team of students, entrepreneurs, and community builders working to expand opportunities for the next generation of female leaders.')}

<section class="container-x py-16 max-w-3xl text-muted-foreground leading-relaxed space-y-4">
  <p>Built by people who believe opportunity should be accessible, not accidental. Our executive team includes young women who have led national organizations, launched initiatives, conducted research, and created impact across Canada.</p>
  <p>Alongside our mentors, volunteers, and partners, we're building a community where girls can develop the confidence, skills, and connections to turn ideas into action.</p>
</section>

<section class="container-x" style="padding:0 0 2.5rem">
  ${photoFrame(GALLERY.graduation, 'CapitalHER cohort with graduation certificates', '21/9')}
</section>

<section class="container-x pb-24">
  <h2 class="font-subheading text-3xl mb-8">Leadership</h2>
  <ul class="team-roster-grid team-leadership-grid">${leadershipGrid}</ul>

  <h2 class="font-subheading text-3xl team-exec-heading">Executive Team</h2>
  ${execGrid}

  <div style="margin-top:6rem;text-align:center">
    <p class="text-muted-foreground mb-6">Want to get involved? Whether you're interested in mentoring, volunteering, or sharing your expertise, we would love to connect.</p>
    <a href="get-involved-team.html" class="btn-magenta">Join the Team ${arrow}</a>
  </div>
</section>
${footer()}`;
}

function programsPage() {
  return `${head('Programs — CapitalHER', 'The CapitalHER Accelerator — virtual and in-person cohorts for girls aged 13–18.')}
${header({ programs: true })}
${pageHero('Programs', 'The CapitalHER <span class="italic text-gradient">Accelerator</span>', '12 weeks. Real skills. Real impact.')}

<section class="container-x py-16 max-w-3xl">
  <p class="text-lg text-muted-foreground leading-relaxed">The CapitalHER Accelerator is our flagship program for girls aged 13–18. Through entrepreneurship, financial literacy, leadership development, and mentorship, participants gain the confidence and skills to turn ideas into action.</p>
  <h3 class="font-display text-2xl mt-10 mb-4">What You'll Learn</h3>
  <ul class="space-y-2 text-muted-foreground">
    <li>• Entrepreneurship, innovation, and problem-solving</li>
    <li>• Financial literacy, budgeting, and money management</li>
    <li>• Leadership, networking, and communication skills</li>
    <li>• Branding, marketing, and storytelling</li>
    <li>• Public speaking and pitching</li>
    <li>• Design thinking and community impact</li>
    <li>• Mentorship from founders, professionals, and community leaders</li>
    <li>• A capstone project and final Solutions Showcase</li>
  </ul>
</section>

<section class="container-x section-block">
  <div class="programs-formats-grid">
    <div class="format-card">
      <span class="badge">Virtual</span>
      <h3 class="font-display text-2xl mb-3">CapitalHER Virtual Accelerator</h3>
      <p class="text-muted-foreground mb-4">Join a global community of girls learning, building, and growing together.</p>
      <ul>
        <li>12-week program</li>
        <li>Two live sessions per week (~1 hour each)</li>
        <li>Open to participants worldwide</li>
      </ul>
      <div class="format-card-photo format-card-photo--virtual" style="margin:1rem 0 1.25rem;border-radius:0.875rem;overflow:hidden;aspect-ratio:16/10;background:#f5f0eb;border:1px solid rgba(43,3,10,0.08)">
        <img src="${GALLERY.virtual}" alt="CapitalHER virtual accelerator session" style="width:100%;height:100%;object-fit:cover;object-position:center 38%;display:block" loading="lazy" />
      </div>
      <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta mt-auto w-fit">Apply Now ${arrow}</a>
    </div>
    <div class="format-card format-card--photo">
      <div style="margin:-1.75rem -1.75rem 1.25rem;border-radius:1.25rem 1.25rem 0 0;overflow:hidden;aspect-ratio:16/9;background:#f5f0eb">
        <img src="${GALLERY.workshop}" alt="In-person CapitalHER workshop in the GTA" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" />
      </div>
      <span class="badge">In-Person</span>
      <h3 class="font-display text-2xl mb-3">CapitalHER GTA Accelerator</h3>
      <p class="text-muted-foreground mb-4">For participants in Toronto and the Greater Toronto Area seeking a hands-on experience.</p>
      <ul>
        <li>12-week hybrid program</li>
        <li>One in-person session per week (2 hours)</li>
        <li>One virtual session per week (1 hour)</li>
        <li>Toronto & GTA</li>
      </ul>
      <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta mt-auto w-fit">Apply Now ${arrow}</a>
    </div>
  </div>
</section>

<section class="container-x section-block section-block--last">
  <div class="stat-grid stat-grid--3">
    <div class="stat-card"><p class="number text-gradient">100%</p><p class="stat-label">Free for participants</p></div>
    <div class="stat-card"><p class="number number--phrase text-gradient">Real-World</p><p class="stat-label">Projects and capstone experience</p></div>
    <div class="stat-card"><p class="number text-gradient">1</p><p class="stat-label">Community for ambitious girls</p></div>
  </div>
</section>
${footer()}`;
}

function impactPage() {
  const steps = [
    ['Apply', 'Complete a short application and tell us about yourself, your interests, and the impact you\'d like to create.'],
    ['Connect', 'Meet your cohort, connect with mentors, and join a community of ambitious girls.'],
    ['Learn', 'Develop skills in entrepreneurship, financial literacy, leadership, and problem-solving.'],
    ['Build', 'Develop a project, initiative, venture, or solution that matters to you.'],
    ['Present', 'Share your work at the CapitalHER Solutions Showcase.'],
    ['Grow', 'Stay connected through events, opportunities, mentorship, and alumni network.'],
  ];
  const journey = steps.map(([t, d], i) => `<div class="journey-step"><div class="step-num">0${i + 1}</div><h3 class="font-display text-xl mb-2">${t}</h3><p class="text-muted-foreground text-sm">${d}</p></div>`).join('');

  return `${head('Impact — CapitalHER', 'CapitalHER impact: 500+ girls engaged, real projects launched, lasting confidence.')}
${header({ impact: true })}
${pageHero('Our Impact', 'More than a program. A <span class="italic text-gradient">launchpad</span>', 'Over 500 girls have participated in CapitalHER programs, workshops, events, and mentorship opportunities.')}

<section class="container-x section-block">
  <div class="stat-grid stat-grid--4">
    <div class="stat-card"><p class="number text-gradient">500+</p><p class="stat-label">Girls engaged</p></div>
    <div class="stat-card"><p class="number text-gradient">94%</p><p class="stat-label">Increased financial confidence</p></div>
    <div class="stat-card"><p class="number text-gradient">87%</p><p class="stat-label">Launch a revenue-generating idea</p></div>
    <div class="stat-card"><p class="number text-gradient">100+</p><p class="stat-label">Student-led projects launched</p></div>
  </div>
</section>

<section class="container-x" style="padding:0 0 3rem">
  ${photoFrame(GALLERY.workshopActivity, 'CapitalHER participants collaborating at a community workshop', '21/9')}
  <p style="margin-top:0.875rem;font-size:0.8125rem;color:rgba(43,3,10,0.55);text-align:center">Hands-on workshops across the GTA</p>
</section>

<section class="container-x py-16">
  <h2 class="font-display text-4xl mb-8">The Participant Journey</h2>
  <div class="journey-grid">${journey}</div>
</section>

<section class="container-x pb-24">
  <h2 class="font-display text-3xl mb-6">Watch the showcase</h2>
  <div class="rounded-[2rem] overflow-hidden border border-border/60 aspect-video">
    <video class="w-full h-full object-cover" src="captialherrecap.mp4" poster="CapitalHER-10.jpg" controls playsinline preload="metadata"></video>
  </div>
</section>
${footer()}`;
}

function contactFormHtml() {
  if (!FORMSPREE_ID) {
    return `<div class="rounded-2xl border border-border/60 bg-muted/30 p-8 space-y-4">
    <p class="text-muted-foreground">Contact form not configured yet. Create a form at <a href="https://formspree.io" class="text-magenta hover:underline" target="_blank" rel="noopener">formspree.io</a>, then set <code>FORMSPREE_ID</code> in <code>generate-site.mjs</code> and run <code>node generate-site.mjs</code>.</p>
  </div>`;
  }
  return `<form class="contact-form" id="contact-form" action="https://formspree.io/f/${FORMSPREE_ID}" method="POST" style="display:grid;gap:1.25rem">
    <input type="hidden" name="_subject" value="New message from CapitalHER website" />
    <div class="contact-form-row" style="display:grid;grid-template-columns:1fr;gap:1.25rem">
      <div class="form-field"><label for="name">Full Name *</label><input id="name" name="name" type="text" required autocomplete="name" /></div>
      <div class="form-field"><label for="email">Email Address *</label><input id="email" name="email" type="email" required autocomplete="email" /></div>
    </div>
    <div class="contact-form-row" style="display:grid;grid-template-columns:1fr;gap:1.25rem">
      <div class="form-field"><label for="role">I am a... *</label>
        <select id="role" name="i_am_a" required>
          <option value="">Select one</option>
          <option>Student</option>
          <option>Parent / Guardian</option>
          <option>Educator</option>
          <option>Mentor</option>
          <option>Volunteer</option>
          <option>Sponsor / Partner</option>
          <option>Media</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-field"><label for="regarding">What's this regarding? *</label>
        <select id="regarding" name="regarding" required>
          <option value="">Select one</option>
          <option>Applying to CapitalHER</option>
          <option>Volunteering</option>
          <option>Mentorship Opportunities</option>
          <option>Sponsorship & Partnerships</option>
          <option>School & Community Programs</option>
          <option>Speaking Opportunities</option>
          <option>Media & Press</option>
          <option>General Question</option>
        </select>
      </div>
    </div>
    <div class="form-field"><label for="city">City, Country</label><input id="city" name="city_country" type="text" autocomplete="address-level2" placeholder="e.g. Toronto, Canada" /></div>
    <div class="form-field"><label for="message">Message *</label><textarea id="message" name="message" required placeholder="Tell us a bit about how we can help…"></textarea></div>
    <p style="font-size:0.875rem;color:rgba(43,3,10,0.62);margin:0">Applying to a cohort? Use <a href="get-involved-program.html" style="color:#9d4a6a;text-decoration:underline">Apply to the Program</a> instead.</p>
    <div><button type="submit" class="btn-magenta btn-magenta-lg">Send Message</button></div>
  </form>`;
}

function contactPage() {
  return `${head('Contact — CapitalHER', 'Contact CapitalHER for programs, partnerships, mentorship, and more.')}
${header({ contact: true })}
${pageHero('Contact', 'Let\'s Build Something <span class="italic text-gradient">Meaningful Together</span>', 'Whether you\'re interested in joining a program, mentoring, sponsoring, bringing CapitalHER to your school, or exploring a partnership — we would love to hear from you.')}

<section class="container-x contact-page" style="padding:4rem 0 5rem">
  <div class="contact-page-grid contact-page-grid--stretch" style="display:grid;grid-template-columns:1fr;gap:2.5rem;align-items:stretch;max-width:72rem;margin:0 auto">
    <aside class="contact-aside" style="display:flex;flex-direction:column;min-height:0;align-self:stretch">
      <p class="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3" style="margin-bottom:0.75rem">Get in touch</p>
      <h2 class="font-display text-3xl md:text-4xl" style="margin:0 0 1rem;line-height:1.15">We would love to hear from you.</h2>
      <p class="text-muted-foreground leading-relaxed" style="margin:0 0 1.75rem;max-width:28rem">Our team typically responds within 1–2 business days. For partnerships, media, or general questions, reach out directly or use the form.</p>
      <div style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid rgba(43,3,10,0.1);flex-shrink:0">
        <p style="font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.12em;color:rgba(43,3,10,0.5);margin:0 0 0.875rem;font-weight:600">Quick links</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem">
          <a href="get-involved-program.html" class="btn-plum" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.625rem 1.125rem;border-radius:999px;font-size:0.875rem;font-weight:600;text-decoration:none">Apply to the Program</a>
          <a href="get-involved-team.html" class="btn-outline" style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.625rem 1.125rem;border-radius:999px;font-size:0.875rem;font-weight:600;text-decoration:none;border:1px solid rgba(43,3,10,0.25);color:#2b030a;background:#fff">Join the Team</a>
        </div>
      </div>
      <div style="display:grid;gap:0.875rem;flex-shrink:0">
        <div class="contact-info-card" style="border-radius:1rem;border:1px solid rgba(43,3,10,0.1);padding:1.125rem 1.25rem;background:#fff">
          <p style="font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.12em;color:rgba(43,3,10,0.5);margin:0 0 0.35rem;font-weight:600">Partnerships & Sponsorships</p>
          <a href="mailto:thivya.jeyapalan@capitalher.ca" style="color:#9d4a6a;font-weight:600;text-decoration:none">thivya.jeyapalan@capitalher.ca</a>
        </div>
        <div class="contact-info-card" style="border-radius:1rem;border:1px solid rgba(43,3,10,0.1);padding:1.125rem 1.25rem;background:#fff">
          <p style="font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.12em;color:rgba(43,3,10,0.5);margin:0 0 0.35rem;font-weight:600">Media & Press</p>
          <a href="mailto:thivya.jeyapalan@capitalher.ca" style="color:#9d4a6a;font-weight:600;text-decoration:none">thivya.jeyapalan@capitalher.ca</a>
        </div>
      </div>
      <div class="contact-aside-photo" style="flex:1 1 0;min-height:10rem;margin-top:1.25rem;border-radius:1rem;overflow:hidden;border:1px solid rgba(43,3,10,0.1);background:#f5f0eb;display:flex;align-self:stretch">
        <img src="${GALLERY.contactTeam}" alt="CapitalHER team members Thivya and Kathy" style="width:100%;height:100%;min-height:10rem;object-fit:cover;object-position:center 22%;display:block" loading="lazy" />
      </div>
    </aside>
    <div class="contact-form-panel" style="border-radius:1.25rem;border:1px solid rgba(43,3,10,0.12);background:#fff;padding:2rem 2rem 2.25rem;box-shadow:0 4px 24px rgba(43,3,10,0.04);box-sizing:border-box;align-self:stretch">
      <h2 class="font-display text-2xl md:text-3xl" style="margin:0 0 0.5rem">Send a message</h2>
      <p style="margin:0 0 1.75rem;color:rgba(43,3,10,0.62);line-height:1.6">Share a few details and we'll follow up by email.</p>
      ${contactFormHtml()}
    </div>
  </div>
  <style>@media(min-width:992px){.contact-page-grid--stretch{grid-template-columns:minmax(0,0.95fr) minmax(0,1.05fr)!important;gap:3.5rem!important;align-items:stretch!important}.contact-aside,.contact-form-panel{align-self:stretch!important}.contact-aside-photo{flex:1 1 0!important;min-height:12rem!important}}@media(min-width:640px){.contact-form-row{grid-template-columns:repeat(2,minmax(0,1fr))!important}}</style>
</section>
${footer()}`;
}

function applyPage() {
  return `${head('Apply to the Program — CapitalHER', 'Apply to join a CapitalHER Accelerator cohort.')}
${header({ involved: true })}
${subnav([['get-involved-program.html', 'Apply to the Program'], ['get-involved-team.html', 'Join the Team']], 'get-involved-program.html')}
${pageHero('Apply · Participant', 'Ready to join a <span class="italic text-gradient">cohort</span>?', 'Open to girls aged 13–18 across the world. Applications take about 10 minutes — no essays, no grades required.')}

<section class="container-x py-16 grid lg:grid-cols-2 gap-12">
  <div class="space-y-6 text-muted-foreground">
    <h3 class="font-display text-2xl text-foreground">What to expect</h3>
    <p>You'll hear back within 2 weeks. We accept on a rolling basis — earlier applications get priority placement.</p>
    <p>Need help? Email <a href="mailto:thivya.jeyapalan@capitalher.ca" class="text-magenta hover:underline">thivya.jeyapalan@capitalher.ca</a></p>
    <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta inline-flex">Complete application on Google Forms ${arrow}</a>
  </div>
  <div class="rounded-2xl border border-border/60 bg-muted/30 p-8 md:p-10 space-y-6">
    <p class="text-muted-foreground leading-relaxed">Applications are handled on Google Forms. You'll be asked for your name, email, city/country, age, program format (virtual or in-person Toronto/GTA), and why you want to join.</p>
    <a href="${APPLY_URL}" target="_blank" rel="noopener" class="btn-magenta inline-flex">Apply to Cohort 3 ${arrow}</a>
  </div>
</section>
${footer()}`;
}

function teamApplyPage() {
  return `${head('Join the Team — CapitalHER', 'Volunteer with CapitalHER as Outreach or Media Coordinator.')}
${header({ involved: true })}
${subnav([['get-involved-program.html', 'Apply to the Program'], ['get-involved-team.html', 'Join the Team']], 'get-involved-team.html')}
${pageHero('Join the Team', 'Help us <span class="italic text-gradient">grow</span>', 'Thank you for your interest in joining the CapitalHER Volunteer Team!')}

<section class="container-x section-block">
  <div class="volunteer-page max-w-4xl mx-auto space-y-10">
    <p class="text-muted-foreground leading-relaxed text-lg">We are currently recruiting for two remote volunteer positions:</p>
    <div class="volunteer-roles-grid">
      <div class="volunteer-role-card">
        <h3 class="font-display text-xl mb-3">Outreach Coordinator</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">Support participant recruitment, chapter expansion, partnership outreach, and community engagement.</p>
      </div>
      <div class="volunteer-role-card">
        <h3 class="font-display text-xl mb-3">Media Coordinator</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">Create content, manage social campaigns, assist with branding, and showcase participant stories.</p>
      </div>
    </div>
    <div class="volunteer-details space-y-4 text-muted-foreground leading-relaxed">
      <p><strong class="text-foreground">Eligibility:</strong> Open to all individuals.</p>
      <p><strong class="text-foreground">Why join?</strong> Leadership experience, mentorship, volunteer hours, and the chance to empower the next generation of changemakers. Fully remote — Slack required.</p>
      <p><strong class="text-foreground">Questions:</strong> <a href="mailto:thivya.jeyapalan@capitalher.ca" class="text-magenta hover:underline">thivya.jeyapalan@capitalher.ca</a> or <a href="mailto:madison.wong@capitalher.ca" class="text-magenta hover:underline">madison.wong@capitalher.ca</a></p>
    </div>
    <a href="${TEAM_URL}" target="_blank" rel="noopener" class="btn-magenta inline-flex">Apply on Google Forms ${arrow}</a>
  </div>
</section>
${footer()}`;
}

function redirectOverview() {
  return `${head('Get Involved — CapitalHER', 'Redirecting to apply')}
${header({ involved: true })}
<meta http-equiv="refresh" content="0;url=get-involved-program.html" />
<section class="container-x py-32 text-center">
  <p class="text-muted-foreground">Redirecting to <a href="get-involved-program.html" class="text-magenta underline">Apply to the Program</a>…</p>
</section>
${footer()}`;
}

const pages = {
  'index.html': indexPage,
  'about.html': aboutPage,
  'about-story.html': aboutStoryPage,
  'about-team.html': aboutTeamPage,
  'programs.html': programsPage,
  'impact.html': impactPage,
  'contact.html': contactPage,
  'get-involved-program.html': applyPage,
  'get-involved-team.html': teamApplyPage,
  'get-involved.html': redirectOverview,
};

for (const [file, fn] of Object.entries(pages)) {
  fs.writeFileSync(path.join(ROOT, file), fn(), 'utf8');
  console.log('Wrote', file);
}
