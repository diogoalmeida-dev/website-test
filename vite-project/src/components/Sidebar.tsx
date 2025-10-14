/*
    Sidebar.tsx
    A simple sidebar component for navigation
    Return type is JSX.Element
*/

import type { JSX } from "react"; 

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sidebar">
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </aside>
  );
}