/* Header.tsx
/ A simple header component for the application
/ Return type is JSX.Element
*/

import type { JSX } from "react";
import '../styles/components/Header.css';
import Toggle from './Toggle.tsx';

import ailaLogo from '../assets/AILA-LOGO-BLUE.png'
import { useNavigate } from 'react-router-dom';


export default function Header({
  isDark,
  handleChange,
}: {
  isDark: boolean;
  handleChange: (isDark: boolean) => void;

}): JSX.Element {

  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={ailaLogo} alt="AILA logo" className="logo" onClick={() => navigate('/')} />
      <Toggle isChecked={isDark} handleChange={handleChange} />
    </header>
  );
}
