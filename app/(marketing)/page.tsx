import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignIn, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center max-w-[988px] p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[425px] lg:h-[425px] mb-8 lg:mb-0">
        <Image src={'/svg/hero.svg'} fill alt="Duolingo Here Pic" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and master languages on Duolingo.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant={"secondary"} size={"lg"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant={"primaryOutline"} size={"lg"} className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="w-full"
              >
                <Link href={'/learn'}>
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>

          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
