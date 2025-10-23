import { useRef, useEffect } from "react";

type Props = {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  maxLength?: number; // opcional (default 4000)
};

const ChatStep: React.FC<Props> = ({ value, onChange, placeholder, maxLength = 4000 }) => {
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  const autoGrow = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "0px";
    el.style.height = Math.min(el.scrollHeight, 320) + "px"; // cresce até 320px
  };

  useEffect(() => {
    autoGrow();
    // auto-grow sempre que value muda externamente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <section className="editor">
      <div className="editor-header">
        <h3 className="editor-title">Escreva a sua queixa</h3>
        <p className="editor-note">
          <strong>Aviso:</strong> Este assistente não substitui aconselhamento jurídico por um advogado.
        </p>
      </div>

      <div className="editor-box">
        <textarea
          ref={taRef}
          className="editor-textarea"
          value={value}
          rows={6}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          onInput={autoGrow}
          placeholder={placeholder ?? "Descreva o que aconteceu, quando, onde e quem esteve envolvido..."}
          aria-label="Campo de texto para a sua queixa"
        />
      </div>

      <div className="editor-footer">
        <span className="editor-hint">
          Dica: foque-se em factos verificáveis (datas, valores, referências a documentos).
        </span>
        <span className="editor-count">
          {value.length}/{maxLength}
        </span>
      </div>
    </section>
  );
};

export default ChatStep;
