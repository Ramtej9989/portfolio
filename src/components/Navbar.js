// src/components/Navbar.js
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand"><span className="violet">RAM</span>TEJ</div>
      <div className="nav-links">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#education">Education</Link>
        <Link href="#certificates">Certificates</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
