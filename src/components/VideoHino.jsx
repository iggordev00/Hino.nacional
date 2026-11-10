export default function VideoHino() {
  return (
    <section className="section video-section" id="video">
      <div className="video-intro"><span className="eyebrow">02 — OUÇA E OBSERVE</span><h2>Uma canção para<br /><em>ouvir com atenção.</em></h2><p>Acompanhe a execução e observe como música e letra se unem para expressar sentimentos de pertencimento e respeito.</p></div>
      <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/rLqj2LUm5l0" title="Execução do Hino Nacional Brasileiro" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
      <p className="video-caption">Dica de estudo: acompanhe a letra na seção seguinte e anote palavras que você gostaria de compreender melhor.</p>
    </section>
  );
}