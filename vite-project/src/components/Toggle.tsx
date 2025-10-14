import '../styles/components/Toggle.css';

export default function Toggle({ handleChange, isChecked }: { isChecked: boolean, handleChange: (isDark: boolean) => void }) {
    return(
        <div className="toggle-container">
            <input 
                type="checkbox"
                id="check"
                className="toggle"
                onChange={(e) => handleChange(e.target.checked)}
                checked={isChecked}
            />
            <label htmlFor="check"></label>
            <span className="mode-icon">{isChecked ? "🌙" : "☀️"}</span>
        </div>

    );
};