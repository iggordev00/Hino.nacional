import { useState } from 'react';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Historia from './components/Historia.jsx';
import VideoHino from './components/VideoHino.jsx';
import LetraHino from './components/LetraHino.jsx';
import Importancia from './components/Importancia.jsx';
import LinhaDoTempo from './components/LinhaDoTempo.jsx';
import Glossario from './components/Glossario.jsx';
import Quiz from './components/Quiz.jsx';
import Certificado from './components/Certificado.jsx';
import MonteHino from './components/MonteHino.jsx';
import Acessibilidade from './components/Acessibilidade.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [fontScale, setFontScale] = useState(1);
  const [contrast, setContrast] = useState(false);
  const [reading, setReading] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  function resetAccessibility() {
    setFontScale(1);
    setContrast(false);
    setReading(false);
  }

  return (
    <div className={`app ${contrast ? 'high-contrast' : ''} ${reading ? 'reading-mode' : ''}`} style={{ '--font-scale': fontScale }}>
      <Header />
      <main>
        <Banner />
        <Historia />
        <VideoHino />
        <LetraHino />
        <Importancia />
        <LinhaDoTempo />
        <Glossario />
        <MonteHino />
        <Quiz onFinish={setQuizResult} />
        <Certificado result={quizResult} />
      </main>
      <Acessibilidade
        onIncrease={() => setFontScale(v => Math.min(1.35, +(v + 0.1).toFixed(2)))}
        onDecrease={() => setFontScale(v => Math.max(0.8, +(v - 0.1).toFixed(2)))}
        contrast={contrast} onContrast={() => setContrast(v => !v)}
        reading={reading} onReading={() => setReading(v => !v)}
        onReset={resetAccessibility}
      />
      <Footer />
    </div>
  );
}