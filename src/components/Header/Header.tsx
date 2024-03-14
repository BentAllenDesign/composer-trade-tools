import { Box, Fade, Toolbar } from '@mui/material';
import { useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';
import React from 'react';
import { AccountSelector } from './AccountSelector';
import { Persona } from './Persona';
import { ThemeToggle } from './ThemeToggle';

const mbp = {
  // Ensure this follows the rest of the main layout's margin and padding
  header: '!py-3',
};

const display = {
  headerContainer: 'sticky top-0',
  header: 'flex justify-between items-center flex-grow',
};

const size = {
  headerContainer: 'w-full',
};

const color = {
  headerContainer: 'bg-white',
};

const special = {
  headerContainer: 'shadow-md',
};

export const Header: React.FC = () => {
  const { location } = useRouterState();
  const onRootPage = location.pathname == '/';
  return (
    <Box className="sticky top-0 w-full">
      <Fade in={!onRootPage} appear timeout={250}>
        <Toolbar className={clsx(special.headerContainer, size.headerContainer, display.headerContainer, color.headerContainer)}>
          <div className={clsx(mbp.header, display.header)}>
            <AccountSelector />
            <Box className="flex space-x-4 items-center">
              <ThemeToggle />
              <Persona />
            </Box>
          </div>
        </Toolbar>
      </Fade>
    </Box>
  );
};