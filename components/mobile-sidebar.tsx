"use client"
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { SideBar } from './sidebar';
interface MobileSidebarProps {

}

export const MobileSidebar = ({ }: MobileSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu size={24} className='text-white' />
            </SheetTrigger>
            <SheetContent className='p-0 z-[100]' side={"left"}>
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}