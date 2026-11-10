import { useState } from 'react';
export default function Certificado({ result }) {
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);
  if (!result) return <section className="section certificate-section"><div className="certificate-locked"><span>✧</span><div><h3>Seu certificado espera por você.</h3><p>Conclua o quiz de 10 perguntas para gerar seu certificado simbólico de participação.</p></div></div></section>;
  return <section className="section certificate-section" id="certificado">
    <div className="section-heading centered"><span className="eyebrow">SUA CONQUISTA</span><h2>Aprendizado que <em>fica marcado.</em></h2><p>Preencha seu nome para criar um certificado simbólico de participação.</p></div>
    <form className="certificate-form no-print" onSubmit={e => {e.preventDefault(); setGenerated(true);}}>
      <label htmlFor="participant">Nome do participante</label><input id="participant" value={name} onChange={e => {setName(e.target.value);setGenerated(false);}} required maxLength="80" placeholder="Digite seu nome completo" />
      <button className="button button-green" type="submit">Gerar certificado →</button>
    </form>
    {generated && <div className="certificate-paper"><div className="certificate-inner"><span className="certificate-seal">✦</span><span className="eyebrow">CERTIFICADO DE PARTICIPAÇÃO</span><h3>Certificado de Conhecimento</h3><p>Certificamos que</p><strong className="participant-name">{name}</strong><p>participou da experiência educativa <b>Hino Nacional Brasileiro — Nossa História, Nossa Identidade</b>, concluindo o quiz com a pontuação:</p><strong className="certificate-score">{result.score} / {result.total}</strong><p className="certificate-date">Data: {new Date().toLocaleDateString('pt-BR')}</p><div className="certificate-signature">Projeto educativo · Frontend React</div></div><button className="button button-green no-print" onClick={() => window.print()}>Imprimir / Salvar em PDF ⤓</button></div>}
  </section>;
}