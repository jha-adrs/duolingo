import { Button } from '@/components/ui/button';
import React from 'react';

interface ButtonsProps {

}

const Buttons = ({ }: ButtonsProps) => {
    return (
        <div className='flex flex-col w-full h-full items-center justify-center'>
            <div>
                Buttons Page!!
            </div>
            <div className="flex flex-col space-y-4 p-6">
                <Button variant={"default"}>Default</Button>
                <Button variant={"primary"}>Primary</Button>
                <Button variant={"primaryOutline"}>Primary Outline</Button>
                <Button variant={"secondary"}>Secondary</Button>
                <Button variant={"secondaryOutline"}>Secondary Outline</Button>
                <Button variant={"destructive"}>Destructive</Button>
                <Button variant={"destructiveOutline"}>Destructive Outline</Button>
                <Button variant={"super"}>Super</Button>
                <Button variant={"superOutline"}>Super Outline</Button>
                <Button variant={"sidebar"}>Sidebar</Button>
                <Button variant={"sidebarOutline"}>Sidebar Outline</Button>
                <Button variant={"ghost"}>Ghost</Button>
                <Button variant={"link"}>Link</Button>
           
            </div>
        </div>
    )
}

export default Buttons;