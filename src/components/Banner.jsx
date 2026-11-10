export default function Banner() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="eyebrow">NOSSA HISTÓRIA · NOSSA IDENTIDADE</span>
        <h1>Hino Nacional<br /><em>Brasileiro</em></h1>
        <p>Uma jornada pela história, pelos versos e pelos valores que fazem parte da identidade do Brasil.</p>
        <a className="button button-yellow" href="#historia">Começar a explorar <span aria-hidden="true">↗</span></a>
        <div className="hero-note"><span className="dot"></span> Aprenda, explore e teste seus conhecimentos</div>
      </div>
      <div className="hero-art" aria-label="Ilustração estilizada da bandeira brasileira" role="img">
        <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
        <div className="flag"><div className="flag-diamond"><div className="flag-globe"></div></div></div>
        <div className="art-caption"><strong>Um símbolo nacional</strong><span>História que nos conecta</span></div>
      </div>
      <div className="hero-bottom"><span>01 / 07</span><span>ROLE PARA DESCOBRIR <b>↓</b></span></div>
    </section>
  );
}