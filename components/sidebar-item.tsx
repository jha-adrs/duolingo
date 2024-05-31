"use client"
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
            className='justify-start h-[52px]'
            asChild
        >
            <Link href={href}>
                <Image src={iconSrc} alt={label} height={24} width={24}
                className='mr-5'
                
                />
                <span>{label}</span>
            </Link>
        </Button>
    )
}