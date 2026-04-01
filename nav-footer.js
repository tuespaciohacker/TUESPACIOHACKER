/* nav-footer.js — Tu Espacio Hacker (Red Theme) */
(function(){
  const page = location.pathname.split('/').pop() || 'index.html';

  document.body.insertAdjacentHTML('afterbegin', `
<div id="scanline"></div>
<canvas id="matrix-canvas"></canvas>
<nav id="nav">
  <div class="nav-wrap">
    <a href="index.html" class="nav-logo">
      <div class="sym">TEH</div>
      TU ESPACIO <span class="chrome-red" style="font-family:var(--display);letter-spacing:3px;margin-left:6px">HACKER</span>
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
</div>`);

  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="display:inline-flex">
        <div class="sym">TEH</div>
        TU ESPACIO <span class="chrome-red" style="font-family:var(--display);letter-spacing:3px;margin-left:6px">HACKER</span>
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
      <div class="footer-legal">⚖️ Todos los servicios se realizan con autorización escrita previa. El acceso no autorizado a sistemas ajenos es delito federal en México.</div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Tu Espacio Hacker. Todos los derechos reservados.</span>
    <span class="ftag">// CIBERSEGURIDAD ÉTICA &amp; PROFESIONAL</span>
  </div>
</footer>
<div class="toast" id="toast"></div>`);

  /* Active link */
  document.querySelectorAll('.nav-links a,.mob-nav a').forEach(a=>{
    if(a.getAttribute('href')===page) a.classList.add('active');
  });

  /* Nav scroll */
  window.addEventListener('scroll',()=>{
    const n=document.getElementById('nav');
    n?.classList.toggle('scrolled', scrollY>60);
  });

  /* Mobile */
  document.getElementById('hamburger')?.addEventListener('click',()=>document.getElementById('mob-nav').classList.add('open'));
  document.getElementById('mob-close')?.addEventListener('click',()=>document.getElementById('mob-nav').classList.remove('open'));

  /* Matrix Canvas */
  const canvas=document.getElementById('matrix-canvas');
  if(canvas){
    const ctx=canvas.getContext('2d');
    const ch='01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    let W,H,cols,drops;
    function init(){W=canvas.width=innerWidth;H=canvas.height=innerHeight;cols=Math.floor(W/18);drops=Array(cols).fill(1);}
    function draw(){
      ctx.fillStyle='rgba(5,5,5,.07)';ctx.fillRect(0,0,W,H);
      ctx.fillStyle='#e02020';ctx.font='13px Share Tech Mono';
      drops.forEach((y,i)=>{ctx.fillText(ch[Math.floor(Math.random()*ch.length)],i*18,y*18);if(y*18>H&&Math.random()>.975)drops[i]=0;drops[i]++;});
    }
    init();window.addEventListener('resize',init);setInterval(draw,60);
  }

  /* Fade-in observer */
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.09});
  function observeAll(){document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));}
  document.addEventListener('DOMContentLoaded',observeAll);
  setTimeout(observeAll,300);
})();

function closeMob(){document.getElementById('mob-nav')?.classList.remove('open');}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3500);}
function openModal(id){document.getElementById(id)?.classList.add('open');}
function closeModal(id){document.getElementById(id)?.classList.remove('open');}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.modal-bg').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');}));
});
