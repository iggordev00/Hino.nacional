import { useState } from 'react';

const parte1 = `Ouviram do Ipiranga as margens plácidas,
De um povo heroico o brado retumbante,
E o sol da Liberdade, em raios fúlgidos,
Brilhou no céu da Pátria nesse instante.

Se o penhor dessa igualdade
Conseguimos conquistar com braço forte,
Em teu seio, ó Liberdade,
Desafia o nosso peito a própria morte!

Ó Pátria amada,
Idolatrada,
Salve! Salve!

Brasil, um sonho intenso, um raio vívido
De amor e de esperança à terra desce,
Se em teu formoso céu, risonho e límpido,
A imagem do Cruzeiro resplandece.

Gigante pela própria natureza,
És belo, és forte, impávido colosso,
E o teu futuro espelha essa grandeza.

Terra adorada,
Entre outras mil,
És tu, Brasil,
Ó Pátria amada!

Dos filhos deste solo és mãe gentil,
Pátria amada,
Brasil!`;
const parte2 = `Deitado eternamente em berço esplêndido,
Ao som do mar e à luz do céu profundo,
Fulguras, ó Brasil, florão da América,
Iluminado ao sol do Novo Mundo!

Do que a terra, mais garrida,
Teus risonhos, lindos campos têm mais flores;
“Nossos bosques têm mais vida”,
“Nossa vida” no teu seio “mais amores”.

Ó Pátria amada,
Idolatrada,
Salve! Salve!

Brasil, de amor eterno seja símbolo
O lábaro que ostentas estrelado,
E diga o verde-louro desta flâmula
— Paz no futuro e glória no passado.

Mas, se ergues da justiça a clava forte,
Verás que um filho teu não foge à luta,
Nem teme, quem te adora, a própria morte.

Terra adorada,
Entre outras mil,
És tu, Brasil,
Ó Pátria amada!

Dos filhos deste solo és mãe gentil,
Pátria amada,
Brasil!`;

export default function LetraHino() {
  const [part, setPart] = useState('completa');
  const text = part === 'primeira' ? parte1 : part === 'segunda' ? parte2 : `${parte1}\n\n${parte2}`;
  return (
    <section className="section lyrics-section" id="letra">
      <div className="section-heading centered"><span className="eyebrow">03 — PALAVRA POR PALAVRA</span><h2>A letra do <em>Hino Nacional.</em></h2><p>Leia com calma. Os versos usam expressões poéticas que refletem ideias de liberdade, natureza e pátria.</p></div>
      <div className="lyrics-card">
        <div className="lyrics-top"><div><span className="mini-label">LETRA OFICIAL</span><h3>Hino Nacional Brasileiro</h3><p>Música: Francisco Manuel da Silva · Letra: Joaquim Osório Duque-Estrada</p></div><span className="lyrics-symbol">❝</span></div>
        <div className="tabs" role="group" aria-label="Selecionar parte da letra">
          {[['completa','Letra completa'],['primeira','1ª parte'],['segunda','2ª parte']].map(([key,label]) => <button key={key} className={part === key ? 'tab active' : 'tab'} onClick={() => setPart(key)}>{label}</button>)}
        </div>
        <pre className="lyrics-text">{text}</pre>
        <div className="lyrics-bottom"><span>BRASIL · SÍMBOLO NACIONAL</span><a href="#glossario">Explorar palavras difíceis →</a></div>
      </div>
    </section>
  );
}