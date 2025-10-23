const IntroStep: React.FC = () => {
  return (
    <section className="card">
      <h2 className="card-title">Bem Vindo ao Queixinhas!</h2>
      <p>
O nosso modelo ajuda-o a estruturar a sua queixa, a identificar os factos principais e a gerar uma primeira versão da resposta. Vai:
      </p>
      <ul className="list">
        <li>Descrever a sua situação.</li>
        <li>Pré-visualizar um sumário da sua situação</li>
        <li>Rever e confirmar — ou voltar atrás para editar.</li>
      </ul>
      <p className="muted">
        Este assistente não substitui o aconselhamento de um advogado. As respostas geradas são apenas informativas e não constituem aconselhamento jurídico.
      </p>
    </section>
  );
};

export default IntroStep;
