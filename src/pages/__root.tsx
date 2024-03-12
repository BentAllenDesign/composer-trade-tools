import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import clsx from 'clsx';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const mbp = {
  // Ensure this follows the rest of the main layout's margin and padding
  main: 'm-3 md:m-4 lg:m-5 xl:m-6 2xl:mx-auto 2xl:my-8',
};

const display = {
  appContainer: 'flex flex-col overflow-x-hidden',
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
    <Header logoLabel='Maestro' />
    <main className={clsx(mbp.main, display.main, size.main)}>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </main>
    <Footer />
  </div>
);

export const Route = createRootRoute({ component: MainLayout });