import { useState } from 'react';
import { glossario } from '../data/historia.js';
export default function Glossario() {
  const [selected, setSelected] = useState(0);
  return <section className="section glossary-section" id="glossario">
    <div className="glossary-header"><div><span className="eyebrow">06 — DESCOMPLICANDO OS VERSOS</span><h2>Palavras que <em>revelam sentidos.</em></h2></div><p>Algumas expressões são antigas ou poéticas. Clique em uma palavra para descobrir seu significado.</p></div>
    <div className="glossary-layout"><div className="word-list">{glossario.map((item, i) => <button key={item.palavra} onClick={() => setSelected(i)} className={selected === i ? 'word active' : 'word'}>{item.palavra.trim()} <span>↗</span></button>)}</div><article className="word-definition"><span className="definition-mark">“</span><span className="mini-label">SIGNIFICADO</span><h3>{glossario[selected].palavra.trim()}</h3><p>{glossario[selected].significado.trim()}</p><span className="definition-count">{String(selected + 1).padStart(2,'0')} / {String(glossario.length).padStart(2,'0')}</span></article></div>
  </section>;
}