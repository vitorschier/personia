/* ===== PersonIA – JavaScript compartilhado =====
   Seções: 1) ícones  2) navegação  3) avisos  4) armazenamento  5) formulários
           6) menu da Home  7) câmera  8) objetivos  9) dispositivos  10) ajuda */

// 1) Ícones (estilo Lucide). Use <i data-icon="nome"></i> no HTML.
const S = (d) => d;
const ICONS = {
  'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'mail':'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'eye':'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off':'<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="m2 2 20 20"/>',
  'shield-check':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'shield':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'sparkles':'<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.13-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.13a.5.5 0 0 1 .96 0L14.06 8.5a2 2 0 0 0 1.44 1.44l6.13 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.13a.5.5 0 0 1-.96 0z"/>',
  'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'user':'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'user-round':'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'home':'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  'camera':'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
  'bar-chart-2':'<path d="M18 20V10M12 20V4M6 20v-6"/>',
  'lightbulb':'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  'refresh':'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>',
  'activity':'<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  'person':'<circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6M6 8l6 2 6-2M12 10v4"/>',
  'dumbbell':'<path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/>',
  'flame':'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  'pencil':'<path d="M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/>',
  'heart':'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'heart-pulse':'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  'sliders':'<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
  'smartphone':'<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  'settings':'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'circle-help':'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
  'book':'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'message':'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  'message-heart':'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 12.5c-2-1.4-3-2.2-3-3.4A1.6 1.6 0 0 1 12 8.3a1.6 1.6 0 0 1 3 .8c0 1.2-1 2-3 3.4z"/>',
  'bug':'<path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
  'headset':'<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/>',
  'search':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'key':'<path d="M2.59 17.41A2 2 0 0 0 2 18.83V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.17a2 2 0 0 0 1.41-.59l.81-.81a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5"/>',
  'lock':'<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
  'bell':'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  'languages':'<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
  'file-text':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
  'log-out':'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  'watch':'<circle cx="12" cy="12" r="6"/><path d="M12 10v2l1 1"/><path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"/><path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.64h2.72a2 2 0 0 0 2-1.64l.8-4"/>',
  'calendar':'<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  'flower':'<circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.67 7-5-4.2 0-7 1.67-7 5Z"/><path d="M12 22c-4.2 0-7-1.67-7-5 4.2 0 7 1.67 7 5Z"/><path d="M12 6a3 3 0 1 0-3 3M12 6a3 3 0 1 1 3 3"/>',
  'repeat':'<path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6"/><path d="m22 15-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/>',
  'moon':'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  'apple':'<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>'
};
function desenharIcones(raiz = document) {
  raiz.querySelectorAll('i[data-icon]').forEach((el) => {
    const path = ICONS[el.dataset.icon];
    if (!path) return;
    el.outerHTML = `<svg class="i ${el.className}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  });
}

// 2) Barra de navegação inferior (aparece nas páginas com data-nav)
const MENU = [['inicio', 'Início', 'home'], ['camera', 'Câmera', 'camera'], ['progresso', 'Progresso', 'bar-chart-2'], ['perfil', 'Perfil', 'user']];
function criarNavegacao() {
  const ativo = document.body.dataset.nav;
  if (!ativo) return;
  const nav = document.createElement('nav');
  nav.className = 'bnav';
  nav.setAttribute('aria-label', 'Navegação principal');
  nav.innerHTML = MENU.map(([id, nome, icone]) =>
    `<a href="${id}.html" class="${id === ativo ? 'on' : ''}"${id === ativo ? ' aria-current="page"' : ''}><span class="ic"><i data-icon="${icone}"></i></span>${nome}</a>`).join('');
  document.body.appendChild(nav);

  // Cabeçalho para telas grandes (o CSS esconde um e mostra o outro)
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `<div class="site-header__in">
    <a class="site-logo" href="inicio.html" aria-label="PersonIA – Início"><img src="../images/logo.png" alt=""><span class="wordmark sm">Person<b>IA</b></span></a>
    <nav aria-label="Navegação principal">${MENU.map(([id, nome, icone]) =>
      `<a href="${id}.html" class="${id === ativo ? 'on' : ''}"${id === ativo ? ' aria-current="page"' : ''}><i data-icon="${icone}"></i>${nome}</a>`).join('')}</nav>
  </div>`;
  document.body.prepend(header);
}

// 3) Aviso rápido (toast)
function aviso(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._id);
  t._id = setTimeout(() => t.classList.remove('show'), 2400);
}
// Links com data-soon ainda não têm tela no Figma
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-soon]')) { e.preventDefault(); aviso('Esta função estará disponível em breve.'); }
});

// 4) Armazenamento (localStorage). data-store salva na hora; data-field salva ao enviar o formulário.
const PREFIXO = 'personia:v2:'; // v2: descarta nomes salvos em versões antigas
const ler = (k) => { try { return localStorage.getItem(PREFIXO + k); } catch (e) { return null; } };
const gravar = (k, v) => { try { localStorage.setItem(PREFIXO + k, v); } catch (e) {} };
const chave = (el) => el.dataset.store || el.dataset.field;
function restaurar(el) {
  const v = ler(chave(el));
  if (v === null) return;
  if (el.type === 'checkbox') el.checked = v === 'true'; else el.value = v;
}
function salvar(el) { gravar(chave(el), el.type === 'checkbox' ? String(el.checked) : el.value); }
function iniciarArmazenamento() {
  document.querySelectorAll('[data-store],[data-field]').forEach(restaurar);
  document.querySelectorAll('[data-store]').forEach((el) => el.addEventListener('change', () => salvar(el)));
  const nome = ler('nome'), sobrenome = ler('sobrenome');
  if (nome) {
    const completo = `${nome} ${sobrenome || ''}`.trim();
    const partes = completo.split(/\s+/);
    const iniciais = (partes[0][0] + (partes.length > 1 ? partes[partes.length - 1][0] : '')).toUpperCase();
    document.querySelectorAll('[data-nome]').forEach((el) => { el.textContent = partes[0]; });
    document.querySelectorAll('[data-fullname]').forEach((el) => { el.textContent = completo; });
    document.querySelectorAll('.avatar span').forEach((el) => { el.textContent = iniciais; });
  }
}

// 5) Formulários com validação simples
function validar(form) {
  let ok = true;
  form.querySelectorAll('[required]').forEach((inp) => {
    const v = inp.value.trim();
    let msg = '';
    if (!v) msg = 'Preencha este campo.';
    else if (inp.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'Digite um e-mail válido.';
    else if (inp.dataset.match && v !== document.getElementById(inp.dataset.match).value) msg = 'As senhas não são iguais.';
    else if (inp.minLength > 0 && v.length < inp.minLength) msg = `Use pelo menos ${inp.minLength} caracteres.`;
    else if (inp.pattern && !new RegExp(`^(?:${inp.pattern})$`).test(v)) msg = inp.title || 'Formato inválido.';
    const campo = inp.closest('.field');
    let e = campo.querySelector('.err-msg');
    if (!e) { e = document.createElement('p'); e.className = 'err-msg'; campo.appendChild(e); }
    e.textContent = msg;
    campo.classList.toggle('err', !!msg);
    if (msg) ok = false;
  });
  return ok;
}
function iniciarFormularios() {
  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validar(form)) { aviso('Confira os campos destacados.'); return; }
      document.querySelectorAll('[data-field]').forEach(salvar);
      if ('saveName' in form.dataset) { gravar('nome', form.querySelector('[data-save="nome"]').value.trim()); gravar('sobrenome', ''); gravar('mail', form.querySelector('[data-save="mail"]').value.trim()); }
      if (form.dataset.next) location.href = form.dataset.next; else aviso(form.dataset.ok || 'Salvo!');
    });
  });
  document.querySelectorAll('.eye').forEach((olho) => olho.addEventListener('click', () => {
    const campo = olho.parentElement.querySelector('input');
    const mostrar = campo.type === 'password';
    campo.type = mostrar ? 'text' : 'password';
    olho.innerHTML = `<i data-icon="${mostrar ? 'eye' : 'eye-off'}"></i>`;
    desenharIcones(olho);
  }));
}

// 6) Menu lateral da Home
function iniciarMenu() {
  const btn = document.getElementById('menuBtn'), gaveta = document.getElementById('drawer');
  if (!btn) return;
  btn.addEventListener('click', () => { gaveta.hidden = false; });
  gaveta.addEventListener('click', (e) => { if (e.target === gaveta) gaveta.hidden = true; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') gaveta.hidden = true; });
}

// 7) Câmera: 1º toque começa a gravar, 2º toque vai para o resultado
function iniciarCamera() {
  const rec = document.getElementById('rec');
  if (!rec) return;
  const rotulo = document.getElementById('recLabel');
  rec.addEventListener('click', () => {
    if (!rec.classList.contains('on')) {
      rec.classList.add('on');
      rotulo.textContent = 'Parar gravação';
      aviso('Gravando… toque novamente para analisar.');
    } else {
      location.href = 'resultado.html';
    }
  });
  document.getElementById('tips').addEventListener('click', () => aviso('Dica: deixe o corpo inteiro visível e use boa iluminação.'));
  document.getElementById('flip').addEventListener('click', () => document.getElementById('stage').classList.toggle('flip'));
}

// 8) Objetivos: contador de selecionados
function iniciarObjetivos() {
  const form = document.getElementById('goals');
  if (!form) return;
  const contar = () => {
    const n = form.querySelectorAll('input:checked').length;
    document.getElementById('count').textContent = n === 0 ? 'Nenhum objetivo selecionado' : `${n} ${n === 1 ? 'objetivo selecionado' : 'objetivos selecionados'}`;
    return n;
  };
  form.addEventListener('change', contar);
  contar();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (contar() === 0) { aviso('Escolha ao menos um objetivo.'); return; }
    form.querySelectorAll('[data-field]').forEach(salvar);
    aviso(form.dataset.ok);
  });
}

// 9) Dispositivos: conectado → desconectado → removido
function iniciarDispositivos() {
  const cards = document.querySelectorAll('[data-dev]');
  const desenhar = () => cards.forEach((c) => {
    const estado = ler('dev-' + c.dataset.dev) || c.dataset.default;
    c.hidden = estado === 'removido';
    c.className = `card sm dev ${estado}`;
    c.querySelector('.st').textContent = estado === 'on' ? 'Conectado' : 'Desconectado';
    const b = c.querySelector('.act button');
    b.textContent = estado === 'on' ? 'Desconectar' : 'Remover dispositivo';
    b.classList.toggle('red', estado !== 'on');
  });
  cards.forEach((c) => c.querySelector('.act button').addEventListener('click', () => {
    const estado = ler('dev-' + c.dataset.dev) || c.dataset.default;
    if (estado === 'on') { gravar('dev-' + c.dataset.dev, 'off'); aviso('Dispositivo desconectado.'); }
    else if (confirm('Remover este dispositivo?')) { gravar('dev-' + c.dataset.dev, 'removido'); aviso('Dispositivo removido.'); }
    desenhar();
  }));
  if (cards.length) desenhar();
}

// 10) Ajuda: busca filtra a lista
function iniciarBusca() {
  const campo = document.getElementById('busca');
  if (!campo) return;
  campo.addEventListener('input', () => {
    const q = campo.value.trim().toLowerCase();
    let visiveis = 0;
    document.querySelectorAll('#helpList .mi').forEach((i) => {
      const mostra = i.textContent.toLowerCase().includes(q);
      i.hidden = !mostra;
      if (mostra) visiveis++;
    });
    document.getElementById('empty').hidden = visiveis > 0;
  });
}

// Início
document.addEventListener('DOMContentLoaded', () => {
  criarNavegacao();
  desenharIcones();
  iniciarArmazenamento();
  iniciarFormularios();
  iniciarMenu();
  iniciarCamera();
  iniciarObjetivos();
  iniciarDispositivos();
  iniciarBusca();
});
