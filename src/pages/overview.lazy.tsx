import { createLazyFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Overview: React.FC = () => {
  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
};

export const Route = createLazyFileRoute('/overview')({ component: Overview });
