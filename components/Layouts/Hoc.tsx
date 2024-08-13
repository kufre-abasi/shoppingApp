'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import DefaultLayout from './DefaultLayout';

const Hoc = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Determine layout type based on route
  let Layout = DefaultLayout;

  return <Layout>{children}</Layout>;
};

export default Hoc;
