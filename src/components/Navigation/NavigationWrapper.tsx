import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';
import React from 'react';
import { useNavigationContext } from '../../state/global/NavigationContext';
import { Logo } from '../Header/Logo';

export const NavigationWrapper: React.FC = () => {
  const navigationContext = useNavigationContext();

  const features = React.useMemo(() => 
    navigationContext.items.filter(item => item.type === 'FEATURE')
  , [navigationContext.items]); 

  const resources = React.useMemo(() => 
    navigationContext.items.filter(item => item.type === 'RESOURCE')
  , [navigationContext.items]);

  return (
    <Drawer
      variant="permanent"
      className='w-1/5 max-w-[300px] min-w-[200px]'
      sx={{
        [`& .MuiDrawer-paper`]: { 
          width: '20%',
          maxWidth: '300px',
          minWidth: '200px',
          boxSizing: 'border-box',
          background: 'white', 
        }}}
    >
      <Toolbar className='justify-center mt-2'>
        <Logo label='Maestro' />
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {features.map((value, idx) => (
            <ListItem key={`side-nav-feature-item-${value.label}-${idx}`} disablePadding>
              <ListItemButton LinkComponent={Link}>
                <ListItemIcon className={clsx(value.active && 'text-primary', 'lg:text-xl 2xl:text-2xl')}>
                  {value.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography className={clsx(value.active && 'text-primary font-medium', 'lg:text-xl 2xl:text-2xl')}>{value.label}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {resources.map((value, idx) => (
            <ListItem key={`side-nav-resource-item-${value.label}-${idx}`} disablePadding>
              <ListItemButton LinkComponent={Link}>
                <ListItemIcon>
                {value.icon}
                </ListItemIcon>
                <ListItemText primary={value.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};