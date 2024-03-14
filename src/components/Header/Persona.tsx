import { Person } from '@mui/icons-material';
import { Avatar, IconButton, Popover, Typography } from '@mui/material';
import React from 'react';
import { useUserContext } from '../../state/global/UserContext';

export const Persona: React.FC = () => {
  const { firstName, lastName } = useUserContext();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar className='bg-primary-100 bg-opacity-50 ring ring-offset-2 ring-primary-900 ring-1 relative'>
          <Person className='absolute text-6xl text-primary-900 opacity-10 flex-grow' />
          <Typography className='text-primary-900 text-2xl font-medium drop-shadow-lg'>{`${firstName?.[0]}${lastName?.[0]}`}</Typography>
        </Avatar>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
};