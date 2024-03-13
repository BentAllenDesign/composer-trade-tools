import { Link } from '@tanstack/react-router';
import React from 'react';
import logoImage from '../../../dist/logo-nav.png';

interface LogoProps {
  label: string;
}

export const Logo: React.FC<LogoProps> = ({ label }) => (
  <div className="flex justify-center items-center select-none group">
    {/* The main composer app for whatever reason has these as separate buttons, so I did too */}
    <Link to='/' className="pr-1 h-full flex items-center">
      <img src={logoImage} alt="Logo" className="h-8 w-8 group-hover:drop-shadow-lg" />
    </Link>
    <Link to="/" className="text-4xl font-display h-full text-gray-800 tracking-tighter no-underline group-hover:drop-shadow-md group-hover:text-black">
      {label}
    </Link>
  </div>
);