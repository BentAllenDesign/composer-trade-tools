import ConstructionIcon from '@mui/icons-material/Construction';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import React from 'react';

type WIPProps = {
  featureName?: string;
  className?: string;
}
export const WIP: React.FC<WIPProps> = ({ className, featureName }) => (
  <Paper variant='outlined' className={clsx(className, 'bg-gradient-to-l from-slate-100 to-slate-200 relative overflow-hidden')}>
    <Box className='absolute w-full h-full justify-center items-center flex'>
      <ConstructionIcon className='text-[240px] blur-sm text-slate-300' />
    </Box>
    {featureName}
  </Paper>
);