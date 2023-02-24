import {
     NewspaperIcon,
     RectangleGroupIcon,
     ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const MobileButtons = () => {
     const { data: session } = useSession();
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.items.length
     );
     return (
          <div className="md:hidden flex gap-3 mx-auto justify-center items-center">
               <Link href="/cart" className="relative">
                    <ShoppingCartIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                    <span className="absolute top-0 -right-1 h-4 w-4 bg-red-700 rounded-full flex items-center justify-center text-[10px] border shadow-md">
                         {cartCount}
                    </span>
               </Link>
               {session && (
                    <>
                         <Link href="/orders">
                              <NewspaperIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                         </Link>
                         <Link href="/categories">
                              <RectangleGroupIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                         </Link>
                    </>
               )}
          </div>
     );
};

export default MobileButtons;
