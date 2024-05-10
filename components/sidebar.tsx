"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SidebarItem } from './sidebar-item';

interface SideBarProps {
    className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
    return (
        <div className={
            cn('flex  h-full lg:w-[250px] lg:fixed left-0 top-0 border-r-2 flex-col', className)
        }>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={'/svg/mascot.svg'} alt='Mascot Image' height={40} width={40} />
                    <h1 className="text-2xl font-extrabold text-green-500 tracking-wide ">
                        Duolingo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Home" iconSrc="/svg/home.svg" href="/learn" />
            </div>
        </div>
    )
}