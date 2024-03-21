import { MobileHeader } from '@/components/mobile-header';
import { SideBar } from '@/components/sidebar';
import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <MobileHeader/>
            <SideBar className='hidden lg:flex'/>
            <main className="lg:pl-[250px] h-full pt-[50px] lg:pt-0">
                <div className="bg-red-500 h-full">
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout;