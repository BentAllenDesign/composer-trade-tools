import { AppBar } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { Logo } from './Logo';

type HeaderProps = {
  logoLabel: string;
}

const mbp = {
  headerContainer: 'py-3',
  // Ensure this follows the rest of the main layout's margin and padding
  header: 'mx-3 md:mx-4 lg:mx-5 xl:mx-6 2xl:mx-auto 2xl:my-8',
};

const display = {
  headerContainer: 'static',
  header: 'flex justify-between',
};

const size = {
  header: 'max-w-7xl',
};

const color = {
  headerContainer: 'bg-white',
};

export const Header: React.FC<HeaderProps> = ({ logoLabel }) => (
  <AppBar className={clsx(mbp.headerContainer, display.headerContainer, color.headerContainer)}>
    <div className={clsx(mbp.header, display.header, size.header)}>
      <Logo label={logoLabel} />
    </div>
  </AppBar>
);