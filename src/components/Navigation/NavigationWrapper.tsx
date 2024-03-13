import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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
      className='w-1/5 max-w-[400px] min-w-[200px]'
      sx={{
        [`& .MuiDrawer-paper`]: { 
          width: '20%',
          maxWidth: '400px',
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
                <ListItemIcon className={clsx(value.active && 'text-primary')}>
                  {value.icon}
                </ListItemIcon>
                <ListItemText primary={value.label} className={clsx(value.active && 'text-primary')} />
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