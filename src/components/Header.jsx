import { useState } from 'react';

const links = [
  ['Início', '#inicio'], ['História', '#historia'], ['Vídeo', '#video'],
  ['Letra', '#letra'], ['Linha do tempo', '#linha-do-tempo'],
  ['Glossário', '#glossario'], ['Atividades', '#atividades']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Hino Nacional Brasileiro - início">
        <span className="brand-mark">✦</span><span>Hino Nacional <small>Nossa história, nossa identidade</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Alternar menu">☰</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  );
}