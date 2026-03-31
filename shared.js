/* ============================================================
   TU ESPACIO HACKER — shared.js
============================================================ */

/* ---- MATRIX CANVAS ---- */
(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオカキクケコサシスセソタチツテトハヒフヘホ';
  let W, H, cols, drops;
  function init() {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
    cols = Math.floor(W / 18);
    drops = Array(cols).fill(1);
  }
  function draw() {
    ctx.fillStyle = 'rgba(4,4,8,.06)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#00ffa3';
    ctx.font = '13px Share Tech Mono';
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 18, y * 18);
      if (y * 18 > H && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    });
  }
  init();
  window.addEventListener('resize', init);
  setInterval(draw, 55);
})();

/* ---- NAV SCROLL ---- */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.style.background = scrollY > 60 ? 'rgba(4,4,8,.98)' : 'rgba(4,4,8,.9)';
});

/* ---- MOBILE MENU ---- */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mob-nav');
const mobClose = document.getElementById('mob-close');
if (ham) ham.addEventListener('click', () => mob.classList.add('open'));
if (mobClose) mobClose.addEventListener('click', () => mob.classList.remove('open'));
function closeMob() { if (mob) mob.classList.remove('open'); }

/* ---- ACTIVE NAV LINK ---- */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ---- SCROLL FADE-IN ---- */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
function observeFades() {
  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
  observeFades();
  // Re-check for dynamically added elements
  setTimeout(observeFades, 400);
});

/* ---- TOAST ---- */
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ---- MODAL ---- */
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }
document.querySelectorAll('.modal-bg').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});
