"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SidebarItem } from './sidebar-item';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';

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
            <div className="flex flex-col gap-y-2 flex-1 px-4">
                <SidebarItem label="Learn" iconSrc="/svg/learn.svg" href="/learn" />
                <SidebarItem label="Leaderboard" iconSrc="/svg/leaderboard.svg" href="/leaderboard" />
                <SidebarItem label="Quests" iconSrc="/svg/quests.svg" href="/quests" />
                <SidebarItem label="Shop" iconSrc="/svg/shop.svg" href="/shop" />
            </div>
            <div className="p-4 z-150">
                <ClerkLoading>
                    <Loader className='w-4 h-4 animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton  afterSignOutUrl='/'/>
                </ClerkLoaded>
            </div>
        </div>
    )
}