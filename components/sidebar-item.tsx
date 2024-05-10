"use client"
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

interface SidebarItemProps {
    label: string;
    iconSrc: string;
    href: string;
}

export const SidebarItem = ({
    label,
    iconSrc,
    href
}: SidebarItemProps) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <Button variant={
            isActive ? 'sidebarOutline' : 'sidebar'
        }
            className='justify-start h-[52px'
        >
            <div className="flex items-center gap-x-3">
                {label}
            </div>
        </Button>
    )
}