import { Check, LockOpen } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useUserContext } from '../../state/global/UserContext';

export const Welcome: React.FC = () => (
  <Box className="flex items-center space-x-6">
    <Check className='text-green-600' style={{ fontSize: '80px' }} />
    <Divider orientation="vertical" flexItem>
      <Box className="flex items-center">
        <LockOpen />
      </Box>
    </Divider>
    <Box className="flex flex-col pl-2 py-4">
      <Typography className='font-light text-xl leading-none'>Welcome</Typography>
      <Typography className='text-7xl leading-none'>{useUserContext()?.firstName}</Typography>
    </Box>
  </Box>
);