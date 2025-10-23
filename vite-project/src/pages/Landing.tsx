/*
    Landing.tsx
    The landing page for the AILA project
    Return type is React.FC
    Welcomes the user, provides a brief introduction, and a call-to-action button   
*/

import '../styles/pages/Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Assistente Legal <span className="highlight">Inteligente</span></h1>
      <p>Insira a sua queixa e receba uma versão reformulada com os decretos-lei aplicáveis.</p>
    <button className="start-button" onClick={() => navigate('/form')}>
      Começar
    </button>
    </div>
  );
};

export default Landing;