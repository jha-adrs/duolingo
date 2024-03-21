import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FooterProps {

}

export const Footer = ({ }: FooterProps) => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-gray-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <Image className="mr-4 rounded-md"
                    src={'/svg/hr.svg'} alt="Flag" width={32} height={40} />
                    Croatian
                </Button>

                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <Image className="mr-4 rounded-md"
                    src={'/svg/es.svg'} alt="Flag" width={32} height={40} />
                    Spanish
                </Button>

                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <Image className="mr-4 rounded-md"
                    src={'/svg/fr.svg'} alt="Flag" width={32} height={40} />
                    French
                </Button>

                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <Image className="mr-4 rounded-md"
                    src={'/svg/it.svg'} alt="Flag" width={32} height={40} />
                    Italian
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <Image className="mr-4 rounded-md"
                    src={'/svg/jp.svg'} alt="Flag" width={32} height={40} />
                    Japanese
                </Button>
            </div>
        </footer>
    )
}