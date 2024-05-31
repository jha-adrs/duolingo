import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

interface UserProgressProps {
    activeCourse: {
        imageSrc: string;
        title: string;
    };
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;

}

export const UserProgress = ({
    activeCourse,
    hearts,
    points,
    hasActiveSubscription
}: UserProgressProps)=>{
    return( 
        <div className="flex items-center justify-between gap-x-2 w-full">
        <Link href="/courses">
            <Button>
                <Image
                    src={activeCourse.imageSrc}
                    alt={activeCourse.title}
                    className="rounded-md border"
                    width={32}
                    height={32}
                />
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant={"ghost"} className="text-orange-500">
                <Image
                    src={"/svg/points.svg"}
                    alt={"Points"}
                    className="mr-1"
                    width={28}
                    height={28}
                /> {points}
            </Button>
        </Link>
        <Link href="/shop">
            <Button variant={"ghost"} className="text-rose-500">
                <Image
                    src={"/svg/heart.svg"}
                    alt={"Points"}
                    className="mr-1"
                    width={28}
                    height={28}
                /> {
                    hasActiveSubscription ? <InfinityIcon className="h-5 w-5 stroke-2"/> : hearts
                }
            </Button>
        </Link>
        </div>
    )
}