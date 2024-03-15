import { Box, Chip, Divider, Drawer, Fade, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';
import React from 'react';
import { useNavigationContext } from '../../state/global/NavigationContext';
import { Logo } from '../Header/Logo';

export const NavigationWrapper: React.FC = () => {
  const navigationContext = useNavigationContext();
  const { location } = useRouterState();
  const features = React.useMemo(() => 
    navigationContext.items.filter(item => item.type === 'FEATURE')
  , [navigationContext.items]); 

  const resources = React.useMemo(() => 
    navigationContext.items.filter(item => item.type === 'RESOURCE')
  , [navigationContext.items]);

  const onRootPage = location.pathname == '/';

  return (
    <Box className={clsx(!onRootPage && 'w-1/5')}>
      <Fade in={!onRootPage} appear timeout={250}>
        <Drawer
          variant="permanent"
          className={clsx(
            'w-1/5',
            '[&_.MuiDrawer-paper]:w-1/5',
            '[&_.MuiDrawer-paper]:overflow-x-hidden',
            '[&_.MuiDrawer-paper]:box-border',
            '[&_.MuiDrawer-paper]:bg-white'
          )}
        >
          <Toolbar className='justify-center mt-2 !justify-end !px-3'>
            <Box className="flex w-72">
              <Logo />
            </Box>
          </Toolbar>
          <Box className="overflow-x-visible flex flex-col items-end">
            <List className='w-full'>
              {features.map((value, idx) => (
                <ListItem key={`side-nav-feature-item-${value.label}-${idx}`} disablePadding>
                    <ListItemButton LinkComponent={Link} className={clsx(value.active && '!border-r-2 !border-black','flex justify-end')}>
                      <Box className="overflow-x-hidden overflow-y-auto flex items-center w-72">
                        <ListItemIcon className={clsx(
                          value.active && 'text-primary', 
                          '[&_.MuiSvgIcon-root]:lg:text-3xl',
                        )}>
                          {value.icon}
                        </ListItemIcon>
                        <ListItemText className="my-2 md:my-3">
                          <Typography className={clsx(value.active && 'text-primary font-semibold', 'font-lighttext-lg lg:text-xl')}>{value.label}</Typography>
                        </ListItemText>
                      </Box>
                    </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider className='w-full flex justify-end [&_.MuiDivider-wrapper]:place-self-end'>
              <Chip label="Resources" size="small" className='bg-primary-100 text-primary-900 font-medium uppercase tracking-widest' />
            </Divider>
            <List className='w-full'>
              {resources.map((value, idx) => (
                <ListItem key={`side-nav-resource-item-${value.label}-${idx}`} disablePadding>
                  <ListItemButton LinkComponent={Link} className='flex justify-end'>
                    <Box className="overflow-x-hidden overflow-y-auto flex items-center w-72 pl-1">
                      <ListItemIcon>
                      {value.icon}
                      </ListItemIcon>
                      <ListItemText>
                        <Typography className='text-md'>{value.label}</Typography>
                      </ListItemText>
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Fade>
    </Box>
  );
};