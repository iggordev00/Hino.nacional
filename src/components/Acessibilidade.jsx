export default function Acessibilidade({ onIncrease, onDecrease, contrast, onContrast, reading, onReading, onReset }) {
  return <aside className="accessibility" aria-label="Opções de acessibilidade">
    <span className="accessibility-title">ACESSIBILIDADE</span>
    <button onClick={onIncrease} aria-label="Aumentar tamanho da fonte" title="Aumentar fonte">A+</button>
    <button onClick={onDecrease} aria-label="Diminuir tamanho da fonte" title="Diminuir fonte">A−</button>
    <button className={contrast ? 'selected' : ''} onClick={onContrast} aria-pressed={contrast} title="Alto contraste">◐</button>
    <button className={reading ? 'selected' : ''} onClick={onReading} aria-pressed={reading} title="Modo leitura">☷</button>
    <button onClick={onReset} title="Restaurar configurações">↺</button>
  </aside>;
}