const cards = [
  { icon: '✦', title: 'Memória histórica', text: 'O hino está ligado a momentos importantes da trajetória brasileira e ajuda a preservar a memória coletiva.' },
  { icon: '◈', title: 'Identidade cultural', text: 'Sua letra e melodia fazem parte das manifestações que ajudam a expressar a identidade nacional.' },
  { icon: '♡', title: 'Respeito e convivência', text: 'Ouvir com atenção e manter uma postura respeitosa demonstra consideração por um símbolo compartilhado.' }
];
export default function Importancia() {
  return <section className="section importance-section" id="importancia">
    <div className="section-heading"><span className="eyebrow">04 — SIGNIFICADO</span><h2>Mais do que uma canção.<br /><em>Um símbolo de todos.</em></h2><p>Conhecer o hino é também refletir sobre a história, a cultura e os valores que queremos construir em sociedade.</p></div>
    <div className="importance-cards">{cards.map((card, i) => <article className="importance-card" key={card.title}><span className="card-icon">{card.icon}</span><span className="card-index">0{i + 1}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div>
    <div className="respect-note"><span>✧</span><p><strong>Durante a execução:</strong> mantenha uma postura respeitosa, evite conversas e brincadeiras e acompanhe o momento com atenção. Respeitar os símbolos nacionais também é respeitar as pessoas e a diversidade do país.</p></div>
  </section>;
}