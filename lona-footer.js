// lona-footer.js — injects sticky footer on every inner page (self-contained)
(function(){
  // Inject footer CSS once
  if (!document.getElementById('lona-footer-style')) {
    var style = document.createElement('style');
    style.id = 'lona-footer-style';
    style.textContent = [
      '.lona-footer{',
        'display:flex;align-items:center;justify-content:center;gap:1.4rem;',
        'padding:0 2rem;',
        'background:var(--cream,#fff3e6);',
        'color:var(--blue,#1a2744);',
        'font-family:"Montserrat",sans-serif;',
        'font-size:.8rem;font-weight:700;letter-spacing:.4px;',
        'border-top:2px solid var(--orange,#e8621a);',
        'position:fixed;',
        'bottom:0;left:0;right:0;',
        'height:48px;',
        'z-index:200;',
        'flex-shrink:0;',
        'white-space:nowrap;',
        'overflow:hidden;',
      '}',
      '.lona-footer .footer-brand{',
        'color:var(--orange,#e8621a);font-weight:900;letter-spacing:1px;',
      '}',
      '.lona-footer .footer-sep{color:var(--orange,#e8621a);opacity:.5;font-weight:400}',
      '.lona-footer .footer-contact{display:flex;align-items:center;gap:.35rem}',
      '.lona-footer a{color:var(--blue,#1a2744);text-decoration:none;font-weight:800;transition:color .15s}',
      '.lona-footer a:hover{color:var(--orange,#e8621a)}',
      'body{padding-bottom:56px!important}',
      '@media(max-width:480px){',
        '.lona-footer{',
          'gap:.45rem;padding:0 .8rem;font-size:.62rem;height:44px;',
        '}',
        '.lona-footer .footer-brand{font-size:.65rem;letter-spacing:.6px}',
        '.lona-footer .footer-sep{font-size:.6rem}',
        '.lona-footer .footer-contact{gap:.2rem}',
        '.lona-footer .footer-contact svg{width:10px;height:10px}',
        '.lona-footer .footer-contact a{font-size:.6rem}',
        '.lona-footer span:last-child{font-size:.6rem}',
        'body{padding-bottom:52px!important}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function injectFooter(){
    if(document.querySelector('.lona-footer')) return;
    var footer = document.createElement('footer');
    footer.className = 'lona-footer';
    footer.innerHTML =
      '<span class="footer-brand">LONA</span>' +
      '<span class="footer-sep">|</span>' +
      '<span class="footer-contact">' +
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
        '<a href="mailto:20252554@s.ubaguio.edu">20252554@s.ubaguio.edu</a>' +
      '</span>' +
      '<span class="footer-sep">|</span>' +
      '<span>Contact &amp; Support</span>';
    document.body.appendChild(footer);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();
