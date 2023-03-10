import {
     ArrowLeftIcon,
     ArrowRightIcon,
     HomeIcon,
     NewspaperIcon,
     RectangleGroupIcon,
     ShoppingCartIcon,
     TagIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { signOut } from "next-auth/react";
interface Props {
     showMoreButtons: boolean;
     setShowMoreButtons: Dispatch<SetStateAction<boolean>>;
}

const MobileButtons = ({ showMoreButtons, setShowMoreButtons }: Props) => {
     const { data: session } = useSession();
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.items.length
     );
     return (
          <div
               className={`md:hidden flex gap-3 items-center ${
                    showMoreButtons ? "mr-auto pl-3" : "ml-auto pr-3"
               }`}
          >
               <button
                    onClick={() => setShowMoreButtons(!showMoreButtons)}
                    className="border-2 rounded-full border-gray-600 bg-black"
               >
                    {showMoreButtons ? (
                         <ArrowRightIcon className="h-7 w-7 p-[5px] stroke-2 animate-pulse" />
                    ) : (
                         <ArrowLeftIcon className="h-7 w-7 p-[5px] stroke-2 animate-pulse" />
                    )}
               </button>

               {showMoreButtons === true && (
                    <>
                         <Link href="/sale">
                              <HomeIcon className="h-7 w-7 stroke-2" />
                         </Link>
                         <Link href="/sale">
                              <TagIcon className="h-7 w-7 stroke-2" />
                         </Link>
                         <Link href="/categories">
                              <RectangleGroupIcon className="h-7 w-7 hover:text-gray-400 duartion-300 stroke-2" />
                         </Link>
                    </>
               )}

               {session && showMoreButtons === true && (
                    <>
                         <Link href="/orders">
                              <NewspaperIcon className="h-7 w-7 hover:text-gray-400 duartion-300 stroke-2" />
                         </Link>
                    </>
               )}

               <Link href="/cart" className="relative">
                    <ShoppingCartIcon className="h-7 w-7 hover:text-gray-400 duartion-300 stroke-2" />
                    {cartCount > 0 && (
                         <span className="absolute top-0 -right-1 h-4 w-4 bg-red-700 rounded-full flex items-center justify-center text-[10px] border shadow-md">
                              {cartCount}
                         </span>
                    )}
               </Link>

               {session && showMoreButtons === true && (
                    <>
                         <button
                              title="Sign In"
                              onClick={() => signOut()}
                              className="ml-2 inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-gray-600 to-red-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
                         >
                              <span className="px-2 py-1 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                   Sign Out
                              </span>
                         </button>
                    </>
               )}
          </div>
     );
};

export default MobileButtons;
