export default function Historia() {
  return (
    <section className="section history-section" id="historia">
      <div className="section-heading">
        <span className="eyebrow">01 — CONTEXTO HISTÓRICO</span>
        <h2>Uma melodia que conta<br /><em>quem somos.</em></h2>
        <p>O Hino Nacional Brasileiro atravessou diferentes momentos da nossa história e tornou-se uma expressão de memória e identidade coletiva.</p>
      </div>
      <div className="history-grid">
        <div className="history-image">
          <div className="history-stamp">BRASIL<br /><b>1831—1922</b></div>
          <div className="history-sun"></div>
          <div className="history-land"></div>
          <div className="image-credit">ARTE EDITORIAL · MEMÓRIA NACIONAL</div>
        </div>
        <div className="history-copy">
          <div className="fact"><span className="fact-number">01</span><div><h3>A música</h3><p>A melodia foi composta por <strong>Francisco Manuel da Silva</strong> em 1831.</p></div></div>
          <div className="fact"><span className="fact-number">02</span><div><h3>A letra</h3><p>A letra oficial é de <strong>Joaquim Osório Duque-Estrada</strong>, adotada em 1922.</p></div></div>
          <div className="fact"><span className="fact-number">03</span><div><h3>Um símbolo nacional</h3><p>O hino é um dos símbolos oficiais do Brasil e sua execução segue regras previstas na legislação.</p></div></div>
          <a className="text-link" href="#linha-do-tempo">Conheça a linha do tempo <span>→</span></a>
        </div>
      </div>
    </section>
  );
}