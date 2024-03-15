import { LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDarkMode } from 'usehooks-ts';

export const ThemeToggle: React.FC = React.memo(() => {
  const { isDarkMode, toggle } = useDarkMode();
  
  // TODO: Figure out some dark mode strategy

  return (
    <IconButton onClick={toggle}>
      <LightMode className='text-3xl' />
    </IconButton>
  );
});