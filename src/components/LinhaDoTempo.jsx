import { useState } from 'react';
import { eventos } from '../data/historia.js';
export default function LinhaDoTempo() {
  const [selected, setSelected] = useState(0);
  return <section className="section timeline-section" id="linha-do-tempo">
    <div className="section-heading centered"><span className="eyebrow">05 — MARCOS IMPORTANTES</span><h2>Uma história em <em>movimento.</em></h2><p>Selecione um marco para conhecer mais sobre a trajetória do Hino Nacional.</p></div>
    <div className="timeline">
      <div className="timeline-years">{eventos.map((e, i) => <button key={e.ano} className={selected === i ? 'year active' : 'year'} onClick={() => setSelected(i)}><span>{e.ano}</span><i></i><small>{e.titulo}</small></button>)}</div>
      <article className="timeline-detail"><span className="eyebrow">MARCO {String(selected + 1).padStart(2,'0')} / 0{eventos.length}</span><h3>{eventos[selected].titulo}</h3><p>{eventos[selected].texto}</p><p className="detail-extra">{eventos[selected].detalhe}</p><div className="timeline-controls"><button className="button button-outline" onClick={() => setSelected(v => Math.max(0, v - 1))} disabled={selected === 0}>← Anterior</button><button className="button button-green" onClick={() => setSelected(v => Math.min(eventos.length - 1, v + 1))} disabled={selected === eventos.length - 1}>Próximo →</button></div></article>
    </div>
  </section>;
}