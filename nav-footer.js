/* ============================================================
   TU ESPACIO HACKER — nav-footer.js
   Injects nav and footer into every page
============================================================ */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';

  /* ---- NAV ---- */
  const navHTML = `
<canvas id="matrix-canvas"></canvas>
<nav id="nav">
  <div class="nav-wrap">
    <a href="index.html" class="nav-logo">
      <div class="sym">TEH</div>
      TU ESPACIO <span class="chrome-green" style="font-family:var(--display);letter-spacing:3px">HACKER</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="servicios.html">Servicios</a></li>
      <li><a href="catalogo.html">Catálogo</a></li>
      <li><a href="recursos.html">PDFs</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="contacto.html">Contacto</a></li>
      <li><a href="admin.html" class="nav-btn">⚙ Admin</a></li>
    </ul>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>
<div class="mob-nav" id="mob-nav">
  <button class="mob-close" id="mob-close">✕</button>
  <ul>
    <li><a href="index.html" onclick="closeMob()">Inicio</a></li>
    <li><a href="servicios.html" onclick="closeMob()">Servicios</a></li>
    <li><a href="catalogo.html" onclick="closeMob()">Catálogo</a></li>
    <li><a href="recursos.html" onclick="closeMob()">PDFs</a></li>
    <li><a href="blog.html" onclick="closeMob()">Blog</a></li>
    <li><a href="contacto.html" onclick="closeMob()">Contacto</a></li>
    <li><a href="admin.html">⚙ Admin</a></li>
  </ul>
</div>`;

  /* ---- FOOTER ---- */
  const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="display:inline-flex;margin-bottom:1rem">
        <div class="sym">TEH</div>
        TU ESPACIO <span class="chrome-green" style="font-family:var(--display);letter-spacing:3px">HACKER</span>
      </a>
      <p>Ciberseguridad profesional y ethical hacking. Servicios realizados bajo consentimiento explícito y marco legal vigente en México.</p>
    </div>
    <div class="footer-col">
      <h4>Navegación</h4>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="catalogo.html">Catálogo</a></li>
        <li><a href="recursos.html">PDFs</a></li>
        <li><a href="blog.html">Blog</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Servicios</h4>
      <ul>
        <li><a href="servicios.html#auditoria">Auditoría</a></li>
        <li><a href="servicios.html#forense">Forense Digital</a></li>
        <li><a href="servicios.html#pentesting">Pentesting</a></li>
        <li><a href="servicios.html#cursos">Capacitación</a></li>
        <li><a href="servicios.html#osint">OSINT</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <a href="mailto:tuespacioforense@gmail.com" class="footer-mail">tuespacioforense@gmail.com</a>
      <div class="footer-legal">⚖️ Todos los servicios se realizan con autorización escrita previa. El acceso no autorizado a sistemas ajenos es un delito federal.</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Tu Espacio Hacker. Todos los derechos reservados.</span>
    <span class="ftag">// Ciberseguridad Ética &amp; Profesional</span>
  </div>
</footer>
<div class="toast" id="toast"></div>`;

  /* ---- INJECT ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- ACTIVE LINK ---- */
  document.querySelectorAll('.nav-links a, .mob-nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
