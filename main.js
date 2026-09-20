const ICONS = {
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.68 4.96 4.96.06 1.3.07 1.65.07 4.87s-.01 3.58-.07 4.87c-.15 3.28-1.65 4.8-4.96 4.96-1.3.06-1.64.07-4.9.07s-3.6 0-4.89-.07c-3.32-.15-4.8-1.68-4.96-4.96C2.08 15.65 2.07 15.3 2.07 12s.01-3.58.07-4.87c.16-3.28 1.64-4.8 4.96-4.96C8.4 2.2 8.75 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-2.35.1-3.4 1.18-3.5 3.5-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.1 2.32 1.15 3.4 3.5 3.5 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c2.34-.1 3.4-1.19 3.5-3.5.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.1-2.32-1.16-3.4-3.5-3.5C15.5 4 15.15 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z"/></svg>',
  ship: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16.5c1.5 1.4 3 1.4 4.5 0 1.5 1.4 3 1.4 4.5 0 1.5 1.4 3 1.4 4.5 0 1.5 1.4 3 1.4 4.5 0"/><path d="M5 16 4 10h1.5l.7-4h3.6V4h4v2h1.2l1.5 4H18l-1 6"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.7 3.5c.5.5.6 1.6.2 2.9-1 3.3-6.9 8.6-9.6 10.9l.7 4.7-2-1.3-1.7-3.6-3.6-1.7-1.3-2 4.7.7C11.4 11.4 16.7 5.5 20 4.5c1.3-.4 2.4-.3 2.9.2Z"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.9L20 10l-6.2 2.1L12 18l-1.8-5.9L4 10l6.2-2.1L12 2Zm7 12 .8 2.5L22 17l-2.2.9L19 20l-.8-2.1L16 17l2.2-.5L19 14Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
};

function iconFor(name) {
  return ICONS[name] || ICONS.link;
}

function renderLinks() {
  const container = document.getElementById("links");
  container.innerHTML = LINKS.map(
    (link) => `
    <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
      <span class="link-icon">${iconFor(link.icon)}</span>
      <span class="link-text">
        <span class="link-title">${link.title}</span>
        ${link.subtitle ? `<span class="link-subtitle">${link.subtitle}</span>` : ""}
      </span>
      <span class="link-arrow">&rsaquo;</span>
    </a>`
  ).join("");
}

function renderSocials() {
  const container = document.getElementById("socials");
  container.innerHTML = SOCIAL_LINKS.map(
    (s) => `
    <a class="social-icon" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}">
      ${iconFor(s.icon)}
    </a>`
  ).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
renderLinks();
renderSocials();
