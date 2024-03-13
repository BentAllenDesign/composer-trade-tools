import { Box } from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import clsx from 'clsx';
import React from 'react';
import { Header } from '../components/Header/Header';
import { NavigationWrapper } from '../components/Navigation/NavigationWrapper';

const mbp = {
  // Ensure this follows the rest of the main layout's margin and padding
  main: '',
};

const display = {
  appContainer: 'flex overflow-x-hidden',
  main: 'flex flex-col flex-grow',
};

const size = {
  appContainer: 'h-screen',
  main: 'max-w-7xl',
};

const color = {
  appContainer: 'bg-background',
};

export const MainLayout: React.FC = () => (
  <div className={clsx(display.appContainer, size.appContainer, color.appContainer)}>
    {/* Passing logo label to endorse future development of global context switching */}
    <NavigationWrapper />
    <Box className="flex-grow flex flex-col relative">
      <Header />
      <main className={clsx(mbp.main, display.main, size.main)}>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </main>
      {/* <Footer /> */}
    </Box>
  </div>
);

export const Route = createRootRoute({ component: MainLayout });