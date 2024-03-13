import { createLazyFileRoute } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import { Test } from '../components/Dashboard/Test';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </div>
  );
};

export const Route = createLazyFileRoute('/dashboard')({ component: Dashboard });
