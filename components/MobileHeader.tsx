import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import SignInButton from "./SignInButton";
import Profile from "./Profile";

const MobileHeader = () => {
     const router = useRouter();
     const { data: session } = useSession();

     return (
          <div className="flex bg-[#171717] md:hidden shadow-md h-fit">
               <div
                    onClick={() => router.push("/")}
                    className="flex flex-1 items-center max-w-1/2 hover:cursor-pointer opacity-80 hover:opacity-100 duration-300"
               >
                    <Image
                         src="/SAMPLEBANNER.png"
                         height={40}
                         width={210}
                         alt="Logo"
                         title="Home"
                         className="h-full w-full object-contain"
                    />
               </div>
               {session ? (
                    <Profile />
               ) : (
                    <div
                         className="flex w-1/2 gap-2 p-2 items-center justify-end hover:cursor-pointer"
                         title="Sign In"
                    >
                         <SignInButton />
                    </div>
               )}
          </div>
     );
};

export default MobileHeader;
