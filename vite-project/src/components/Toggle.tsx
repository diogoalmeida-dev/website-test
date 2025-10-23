import '../styles/components/Toggle.css';
import { Sun, Moon } from 'lucide-react';

export default function Toggle({
  handleChange,
  isChecked,
}: {
  isChecked: boolean;
  handleChange: (isDark: boolean) => void;
}) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={(e) => handleChange(e.target.checked)}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
      <span className="mode-icon">
        {isChecked ? <Moon size={20} strokeWidth={2.6} /> : <Sun size={20} strokeWidth={2.6} />}
      </span>
    </div>
  );
}
