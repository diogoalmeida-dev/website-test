import { useMemo, useState } from "react";
import "../styles/pages/Complaint.css";
import "../styles/components/Stepper.css";
import "../styles/components/ChatBox.css";

import Stepper from "../components/Stepper";
import IntroStep from "../components/steps/IntroStep";
import ChatStep from "../components/steps/ChatStep";
import DraftAnswerStep from "../components/steps/DraftAnswer";
import FinalizeStep from "../components/steps/FinalizeStep";

const TOTAL_STEPS = 4;

const Complaint: React.FC = () => {
  const [step, setStep] = useState<number>(1); // 1-Intro, 2-Chat, 3-Draft, 4-Final
  const [complaintText, setComplaintText] = useState<string>("");
  const [draftAnswer, setDraftAnswer] = useState<string>("");

  const canGoNext = useMemo(() => {
    if (step === 1) return true;
    if (step === 2) return complaintText.trim().length > 0;
    if (step === 3) return draftAnswer.trim().length > 0;
    return true;
  }, [step, complaintText, draftAnswer]);

  const goNext = () => {
    if (!canGoNext) return;

    if (step === 2 && !draftAnswer) {
      // Gera um resumo automático simples (3 tópicos)
      const placeholder = `Resumo automático da sua situação:\n
• Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n
• Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.\n
• Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.\n
— Este texto é um rascunho gerado automaticamente e deve ser revisto.`;

      setDraftAnswer(placeholder);
    }

    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleEditOriginal = () => {
    setStep(2);
  };

  const handleKeepAnswer = () => {
    alert("Resposta confirmada e copiada para o clipboard.");
  };

  return (
    <div className="complaint-page">
      <Stepper
        total={TOTAL_STEPS}
        current={step}
        labels={["Introdução", "Queixa", "Resumo", "Finalizar"]}
      />

      <div className="step-body">
        {step === 1 && <IntroStep />}

        {step === 2 && (
          <ChatStep
            value={complaintText}
            onChange={setComplaintText}
            placeholder="Descreva a sua queixa com o máximo de detalhe (factos, datas, valores, entidades)..."
            maxLength={4000}
          />
        )}

        {step === 3 && (
          <DraftAnswerStep
            value={draftAnswer}
            onChange={setDraftAnswer}
            helper="Este é um resumo ilustrativo. Se encontrar incoerências, reformule a sua queixa."
          />
        )}

        {step === 4 && (
          <FinalizeStep
            answer={draftAnswer}
            onKeep={handleKeepAnswer}
            onEditOriginal={handleEditOriginal}
          />
        )}
      </div>

      <div className="nav-row">
        <button className="btn secondary" onClick={goBack} disabled={step === 1}>
          Back
        </button>
        <div className="spacer" />
        <button
          className="btn primary"
          onClick={goNext}
          disabled={!canGoNext || step === TOTAL_STEPS}
        >
          {step === TOTAL_STEPS - 1 ? "Próximo" : step === TOTAL_STEPS ? "Finalizado" : "Próximo"}
        </button>
      </div>
    </div>
  );
};

export default Complaint;
