/* Header.tsx
/ A simple header component for the application
/ Return type is JSX.Element
*/

import type { JSX } from "react";
import '../styles/components/Header.css';
import Toggle from './Toggle.tsx';

export default function Header({
  isDark,
  handleChange,
}: {
  isDark: boolean;
  handleChange: (isDark: boolean) => void;
}): JSX.Element {
  return (
    <header className="header">
      <h2 className="logo">AILA</h2>
      <Toggle isChecked={isDark} handleChange={handleChange} />
    </header>
  );
}
