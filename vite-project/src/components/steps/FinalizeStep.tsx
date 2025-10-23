import { Bot } from "lucide-react";

type Props = {
  answer: string;
  onKeep: () => void;
  onEditOriginal: () => void;
};

const FinalizeStep: React.FC<Props> = ({ answer, onKeep, onEditOriginal }) => {
  return (
    <section className="card">
      <Bot className="bot-icon" size={28} />
      <h2 className="card-title">AILA:</h2>
      <div className="final-answer">
        {answer || "No answer available."}
      </div>

      <div className="final-actions">
        <button className="btn secondary" onClick={onEditOriginal}>
          Editar queixa original
        </button>
        <button className="btn primary" onClick={onKeep}>
          Ficar com esta resposta
        </button>
      </div>
    </section>
  );
};

export default FinalizeStep;
