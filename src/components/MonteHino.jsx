import { useState } from 'react';
import { versos } from '../data/historia.js';

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  if (copy.every((v, i) => v === list[i]) && copy.length > 1) [copy[0], copy[1]] = [copy[1], copy[0]];
  return copy;
}

export default function MonteHino() {
  const [level, setLevel] = useState(4);
  const [items, setItems] = useState(() => shuffle(versos.slice(0, 4)));
  const [feedback, setFeedback] = useState('');
  const [checked, setChecked] = useState(false);
  const [unlocked, setUnlocked] = useState(4);
  const start = (n) => { setLevel(n); setItems(shuffle(versos.slice(0, n))); setFeedback(''); setChecked(false); };
  const move = (i, delta) => {
    const next = [...items], j = i + delta;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setItems(next); setChecked(false); setFeedback('');
  };
  const verify = () => {
    const correct = items.every((v, i) => v === versos[i]);
    setChecked(true);
    if (correct) { setFeedback('Perfeito! Você organizou todos os versos na sequência correta.'); setUnlocked(v => Math.max(v, level === 4 ? 8 : level === 8 ? 12 : 12)); }
    else setFeedback('Ainda não está na sequência correta. Use as setas para mover os versos e tente novamente.');
  };
  return <section className="section build-section" id="atividades">
    <div className="section-heading"><span className="eyebrow">07 — DESAFIO INTERATIVO</span><h2>Monte o <em>Hino Nacional.</em></h2><p>Organize os versos na ordem correta. Use as setas para mover cada verso — funciona no computador e no celular.</p></div>
    <div className="build-panel">
      <div className="level-picker"><span className="mini-label">ESCOLHA O NÍVEL</span><div>{[4, 8, 12].map(n => <button key={n} disabled={n > unlocked} className={level === n ? 'level active' : 'level'} onClick={() => start(n)}>{n === 4 ? 'Iniciante' : n === 8 ? 'Intermediário' : 'Avançado'} <small>{n} versos</small>{n > unlocked && <span aria-label="bloqueado">🔒</span>}</button>)}</div></div>
      <ol className="verse-list">{items.map((verse, i) => <li key={verse} className={checked && verse === versos[i] ? 'verse correct' : ''}><span className="verse-number">{String(i + 1).padStart(2, '0')}</span><span className="verse-text">{verse}</span><span className="move-controls"><button aria-label={`Mover verso ${i + 1} para cima`} disabled={i === 0} onClick={() => move(i, -1)}>↑</button><button aria-label={`Mover verso ${i + 1} para baixo`} disabled={i === items.length - 1} onClick={() => move(i, 1)}>↓</button></span></li>)}</ol>
      {feedback && <p className={checked && items.every((v, i) => v === versos[i]) ? 'feedback success' : 'feedback'} role="status">{feedback}</p>}
      <div className="build-actions"><button className="button button-outline" onClick={() => start(level)}>↻ Embaralhar novamente</button><button className="button button-green" onClick={verify}>Verificar sequência →</button></div>
    </div>
  </section>;
}