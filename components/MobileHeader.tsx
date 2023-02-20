import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import SignInButton from "./SignInButton";
import Profile from "./Profile";

const MobileHeader = () => {
     const router = useRouter();
     const { data: session } = useSession();

     return (
          <div className="flex bg-[#171717] md:hidden shadow-md border-b border-gray-600">
               <div
                    onClick={() => router.push("/")}
                    className="flex flex-1 items-center hover:cursor-pointer opacity-80 hover:opacity-100 duration-300"
               >
                    <Image
                         src="/SAMPLEBANNER.png"
                         height={40}
                         width={210}
                         alt="Logo"
                         title="Home"
                         className="h-full w-fit object-contain"
                    />
               </div>
               {session ? (
                    <Profile />
               ) : (
                    <div
                         className="flex gap-2 p-2 items-center justify-center hover:cursor-pointer"
                         title="Sign In"
                    >
                         <SignInButton />
                    </div>
               )}
          </div>
     );
};

export default MobileHeader;
