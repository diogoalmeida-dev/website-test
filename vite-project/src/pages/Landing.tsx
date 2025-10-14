/*
    Landing.tsx
    The landing page for the AILA project
    Return type is React.FC
    Welcomes the user, provides a brief introduction, and a call-to-action button   
*/

import '../styles/pages/Landing.css';

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <h1>Assistente Legal Inteligente</h1>
      <p>Insira a sua queixa e receba uma versão reformulada com os decretos-lei aplicáveis.</p>
      <button className="start-button">Começar agora</button>
    </div>
  );
};

export default Landing;