import { Box } from '@mui/material';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import React from 'react';
import logoImage from '../../../dist/logo-nav.png';

const mbp = {
  logoGraphicContainer: 'pr-1 xl:pr-2'
};

const display = {
  logoContainer: 'flex justify-center items-center',
  logoGraphicContainer: 'flex items-center'
};

const size = {
  logoText: 'h-full',
  logoGraphicContainer: 'h-full',
  logoGraphic: 'h-8 w-8 xl:h-10 xl:w-10'
};

const text = {
  logoText: 'font-display text-4xl xl:text-5xl text-gray-800 tracking-tighter no-underline'
};

const special = {
  logoContainer: 'select-none group',
  logoText: 'group-hover:drop-shadow-md group-hover:text-black',
  logoGraphic: 'group-hover:drop-shadow-lg'
};

export const Logo: React.FC = () => (
  <Box className={clsx(special.logoContainer, display.logoContainer)}>
    {/* The main composer app for whatever reason has these as separate buttons, so I did too */}
    <Link to='/dashboard' className={clsx(mbp.logoGraphicContainer, display.logoGraphicContainer, size.logoGraphicContainer)}>
      <img src={logoImage} alt="Logo" className={clsx(special.logoGraphic, size.logoGraphic)} />
    </Link>
    <Link to="/dashboard" className={clsx(special.logoText, size.logoText, text.logoText)}>
      Maestro
    </Link>
  </Box>
);