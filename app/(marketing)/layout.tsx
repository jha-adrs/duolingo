import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({children }: MarketingLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex col items-center justify-center">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MarketingLayout;