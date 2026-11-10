import { useState } from 'react';
import { perguntas } from '../data/perguntas.js';

export default function Quiz({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const score = perguntas.reduce((total, q, i) => total + (answers[i] === q.correta ? 1 : 0), 0);
  const current = perguntas[index];
  function choose(option) { if (!submitted) setAnswers(v => ({ ...v, [index]: option })); }
  function next() {
    if (answers[index] === undefined) return;
    if (!submitted) { setSubmitted(true); return; }
    if (index < perguntas.length - 1) { setIndex(v => v + 1); setSubmitted(false); }
    else { setFinished(true); onFinish({ score, total: perguntas.length }); }
  }
  function restart() { setIndex(0); setAnswers({}); setSubmitted(false); setFinished(false); onFinish(null); }
  return <section className="section quiz-section" id="quiz">
    <div className="quiz-header"><div><span className="eyebrow">DESAFIO FINAL</span><h2>O que você <em>aprendeu?</em></h2><p>Responda a 10 perguntas e descubra quanto aprendeu sobre o Hino Nacional.</p></div><div className="quiz-score"><strong>{finished ? score : Object.keys(answers).length}<span>/{perguntas.length}</span></strong><small>{finished ? 'PONTUAÇÃO FINAL' : 'RESPONDIDAS'}</small></div></div>
    <div className="quiz-card">
      {finished ? <div className="quiz-finished"><span className="finish-star">✦</span><span className="eyebrow">QUIZ CONCLUÍDO</span><h3>{score >= 8 ? 'Excelente trabalho!' : score >= 5 ? 'Bom trabalho! Continue aprendendo.' : 'Você está no caminho!'}</h3><p>Você acertou {score} de {perguntas.length} questões. {score >= 8 ? 'Seu conhecimento sobre o hino está afiado.' : 'Releia a história e o glossário e tente novamente.'}</p><button className="button button-green" onClick={restart}>Refazer quiz ↻</button></div> :
        <>
          <div className="quiz-progress"><span>PERGUNTA {String(index + 1).padStart(2, '0')} <i>DE {perguntas.length}</i></span><div><span style={{ width: `${((index + 1) / perguntas.length) * 100}%` }}></span></div></div>
          <h3 className="quiz-question">{current.pergunta}</h3>
          <div className="answers">{current.alternativas.map((answer, i) => <button key={answer} onClick={() => choose(i)} className={`answer ${answers[index] === i ? 'selected' : ''} ${submitted && i === current.correta ? 'is-correct' : ''} ${submitted && answers[index] === i && i !== current.correta ? 'is-wrong' : ''}`}><span>{String.fromCharCode(65 + i)}</span>{answer}{submitted && i === current.correta && <b>✓</b>}</button>)}</div>
          {submitted && <p className="quiz-explanation" role="status">{answers[index] === current.correta ? 'Correto! ' : 'Quase! '}{current.explicacao}</p>}
          <div className="quiz-footer"><span>{answers[index] === undefined ? 'Selecione uma alternativa para continuar.' : submitted ? 'Resposta conferida.' : 'Sua resposta foi selecionada.'}</span><button className="button button-green" disabled={answers[index] === undefined} onClick={next}>{!submitted ? 'Conferir resposta →' : index === perguntas.length - 1 ? 'Ver resultado →' : 'Próxima pergunta →'}</button></div>
        </>}
    </div>
  </section>;
}