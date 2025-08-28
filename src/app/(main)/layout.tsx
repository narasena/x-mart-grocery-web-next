import Header from '@/components/layout/Header/Header';
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="md:max-w-[1100px] md:mx-auto">{children}</div>
    </div>
  );
}
