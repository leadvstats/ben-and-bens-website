// Line icons used across the site in place of emoji.
// Each entry is the inner markup of a 24x24 stroke-based SVG.
// The names here are the values the CMS "Icon" dropdowns store, so if you
// add or rename one, update the matching options in src/admin/config.yml.

const ICONS = {
  sprout:
    '<path d="M12 21v-8"/><path d="M12 13C12 8.6 8.9 6 4 6c0 4.4 3.1 7 8 7z"/><path d="M12 11c0-3.9 2.7-6.5 7-6.5 0 3.9-2.7 6.5-7 6.5z"/><path d="M7 21h10"/>',
  leaf:
    '<path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14z"/><path d="M5 19l8-8"/>',
  grass:
    '<path d="M3 20h18"/><path d="M6 20c0-3.5-1-6.5-3-8.5"/><path d="M9.5 20c0-5 .8-9.5 3-13"/><path d="M14 20c0-4-1-7.5-3.5-10"/><path d="M17.5 20c0-3.5 1-6.5 3.5-8.5"/>',
  tree:
    '<path d="M12 2 6 10h3l-4 6h14l-4-6h3z"/><path d="M12 16v6"/>',
  flower:
    '<path d="M12 21v-9"/><path d="M8 4.5l2 2.5 2-3.5 2 3.5 2-2.5V8a4 4 0 0 1-8 0z"/><path d="M12 18c-1.2-2-3.5-3-6-2.5 1 2.3 3.4 3.2 6 2.5z"/><path d="M12 16c1.2-2 3.5-3 6-2.5-1 2.3-3.4 3.2-6 2.5z"/>',
  layers:
    '<path d="M12 3 2 8l10 5 10-5z"/><path d="m2 12.5 10 5 10-5"/><path d="m2 17 10 5 10-5"/>',
  shovel:
    '<path d="M12 12 19 5"/><path d="M17.6 3.6l2.8 2.8"/><path d="M9.5 9.5 14.5 14.5 11.3 17.65Q8.5 19.5 6 18Q4.5 15.5 6.35 12.7Z"/>',
  bricks:
    '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9.3h18M3 14.7h18"/><path d="M12 4v5.3M7.5 9.3v5.4M16.5 9.3v5.4M12 14.7V20"/>',
  wind:
    '<path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/>',
  sign:
    '<path d="M5 21V3"/><path d="M3 21h5"/><path d="M5 5h14"/><path d="M9 5v3M17 5v3"/><rect x="8" y="8" width="10" height="7" rx="1"/>',
  home:
    '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15.5 2 2 4-4"/>',
  search:
    '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  shield:
    '<path d="M12 3 4.5 6v5.5c0 4.7 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.8 7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
  star:
    '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',
  clock:
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
};

const FALLBACK = "leaf";

function render(name, className) {
  const body = ICONS[name] || ICONS[FALLBACK];
  const cls = className ? `icon-svg ${className}` : "icon-svg";
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

module.exports = { ICONS, render };
