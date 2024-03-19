import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader, Loader2 } from "lucide-react"
import Image from "next/image"

interface HeaderProps {

}

export const Header = ({ }: HeaderProps) => {
    return (
        <header className="h-20 w-full border-b-2 border-gray-200">
            <div className="lg:max-w-screen-lg mx-auto flex items-center
            justify-between h-full ">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src={'/svg/mascot.svg'} alt="Trilingo Main Logo" height={40} width={40} />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        Duolingo
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" afterSignUpUrl="/learn" afterSignInUrl="/learn">
                            <Button variant={"ghost"}>
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    )
}