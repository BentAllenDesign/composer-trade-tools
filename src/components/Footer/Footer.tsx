import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { Fragment } from 'react';

export const Footer: React.FC = React.memo(() => {
  return (
    <Fragment>
      <BottomNavigation
        showLabels
        value={1}
        className='static sm:hidden justify-evenly'
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
      <Box className='hidden sm:flex flex-col w-full py-6 items-center text-slate-400'>
        <div>© 2024 Joshua Shevach. All rights reserved.</div>
        <div>Powered by Composer.trade. Composer Technologies Inc.</div>
      </Box>
    </Fragment>
  );
});