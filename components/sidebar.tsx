"use client"
import { cn } from '@/lib/utils';
import React from 'react';

interface SideBarProps {
 className?: string;
}

export const SideBar = ({ className}: SideBarProps) => {
    return (
        <div className={
            cn('flex bg-blue-500 h-full lg:w-[250px] lg:fixed left-0 top-0 border-r-2 flex-col', className)
        }>
            Sidebar
        </div> 
    )
}