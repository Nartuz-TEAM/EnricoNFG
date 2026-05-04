function renderHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  header.innerHTML = `
    <nav>
      <span class="nav-logo">EN<span>.</span>RICO</span>
      <ul class="nav-links">
          <li><a id="nav-home" onclick="window.location.href='index.html'">Início</a></li>
          <li><a id="nav-prof" onclick="window.location.href='profissional.html'">Profissional</a></li>
          <li><a id="nav-pes"  onclick="window.location.href='pessoal.html'">Pessoal</a></li>
          <li><a href="mailto:egaldino2004@gmail.com">Contato <span class="nav-dot"></span></a></li>
      </ul>
    </nav>
  `;
}

/* FOOTER — componente reutilizável */
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const ano = new Date().getFullYear(); 

  footer.innerHTML = `
    <div class="footer-inner">
      <span class="footer-left">Feito por <strong>Enrico Coruja</strong> · ${ano}</span>
      <div class="footer-right">
        <a href="https://github.com/EnRico-94-git" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/enrico-do-nascimento-ferreira-galdino/" target="_blank">LinkedIn</a>
        <a href="mailto:egaldino2004@gmail.com">Contato</a>
      </div>
    </div>
  `;
}

/* NAVEGAÇÃO SPA */
function navigateTo(url) {
  window.location.href = url;
}

function updateActiveNav() {
  const page = window.location.pathname.split('/').pop(); // pega o nome do arquivo

  const map = {
    'index.html':         'nav-home',
    '':                   'nav-home',      // quando a URL não tem arquivo (raiz)
    'profissional.html':  'nav-prof',
    'pessoal.html':       'nav-pes',
  };

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const activeId = map[page];
  const activeLink = document.getElementById(activeId);
  if (activeLink) activeLink.classList.add('active');
}

/* INICIALIZAÇÃO */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  updateActiveNav(); // detecta a página automaticamente
});