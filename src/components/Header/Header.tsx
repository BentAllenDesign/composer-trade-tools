import { DarkMode, LightMode, Person } from '@mui/icons-material';
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useDarkMode } from 'usehooks-ts';
import { useUserContext } from '../../state/global/UserContext';
import { AccountSelector } from './AccountSelector';

const mbp = {
  headerContainer: 'w-full shadow-md top-0',
  // Ensure this follows the rest of the main layout's margin and padding
  header: '!py-3 ',
};

const display = {
  headerContainer: 'sticky top-0',
  header: 'flex justify-between items-center flex-grow',
};

const size = {
  header: 'max-w-7xl',
};

const color = {
  headerContainer: 'bg-white',
};

export const Header: React.FC = () => {
  const { firstName, lastName } = useUserContext();
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <Toolbar className={clsx(mbp.headerContainer, display.headerContainer, color.headerContainer)}>
      <div className={clsx(mbp.header, display.header, size.header)}>
        <AccountSelector />
        <Box className="flex space-x-4 items-center">
          <IconButton onClick={toggle}>
            {isDarkMode 
              ? <DarkMode className='text-3xl' />
              : <LightMode className='text-3xl' />}
          </IconButton>
          <Avatar className='bg-primary-100 ring ring-offset-2 ring-primary-900 ring-2 relative'>
            <Person className='absolute text-6xl text-primary-900 opacity-20 flex-grow' />
            <Typography className='text-primary-900 text-2xl font-medium drop-shadow-lg'>{`${firstName?.[0]}${lastName?.[0]}`}</Typography>
          </Avatar>
        </Box>
      </div>
    </Toolbar>
  );
};