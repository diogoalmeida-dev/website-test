import "../styles/components/ComplaintBox.css"
import { useState, useRef, useEffect } from "react";


function ComplaintBox() {
  const [complaint, setComplaint] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // auto-resize textarea height dynamically
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [complaint]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaint.trim()) return;

    setIsSending(true);
    setSent(false);

    setTimeout(() => {
      console.log("Complaint sent:", complaint);
      setComplaint("");
      setIsSending(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="complaint-box">
      <h2 className="complaint-title">Send us your complaint</h2>

      <form onSubmit={handleSubmit} className="complaint-form">
        <textarea
          ref={textareaRef}
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Write your complaint..."
          rows={1}
          className="complaint-input"
          maxLength={1000}
        />

        <div className="complaint-actions">
          <span className="char-count">{complaint.length}/1000</span>
          <button
            type="submit"
            disabled={isSending || !complaint.trim()}
            className="send-btn"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>

        {sent && <p className="sent-notice">✅ Complaint sent!</p>}
      </form>
    </div>
  );
}

export default ComplaintBox;
