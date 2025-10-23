import { useEffect, useState } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void; // mantém-se, caso precises no futuro
  helper?: string;
};

const DraftAnswerStep: React.FC<Props> = ({ value, helper }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!value) return;

    setDisplayed(""); // reinicia antes de começar a "escrever"
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + value[index]);
      index++;
      if (index >= value.length) clearInterval(interval);
    }, 20); // velocidade da escrita (ms por letra)

    return () => clearInterval(interval);
  }, [value]);

  return (
    <section className="card">
      <h2 className="card-title">Resumo da sua situação</h2>
      <p className="muted">
        {helper ??
          "Este resumo foi gerado automaticamente a partir da sua descrição. Verifique se está correto e completo."}
      </p>

      <div className="draft-area readonly" aria-live="polite">
        {displayed || "A gerar resumo..."}
      </div>

      <p className="hint">Reveja o resumo antes de continuar.</p>
    </section>
  );
};

export default DraftAnswerStep;
