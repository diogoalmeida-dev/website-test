/* Header.tsx
/ A simple header component for the application
/ Return type is JSX.Element
*/

import type { JSX } from "react"; 
import '../styles/components/Header.css';

export default function Header(): JSX.Element {
  return (
    <header>
      <h2 className="logo">AILA</h2>
      <button className="theme-toggle">🌙</button>
    </header>
  );
}