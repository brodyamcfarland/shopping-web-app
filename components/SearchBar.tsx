import {
     CogIcon,
     NewspaperIcon,
     ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const SearchBar = () => {
     const { data: session } = useSession();
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );
     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {};

     return (
          <div className="flex h-10 items-center pl-2 py-2 md:pl-0 md:justify-center bg-[#171717] text-white shadow-xl border-b border-gray-600">
               <form
                    className="flex mx-1 w-full md:w-[25rem] lg:w-[30rem] divide-x-[1px] divide-gray-600 rounded-lg shadow-lg "
                    onSubmit={handleSearch}
               >
                    <input
                         className="h-[26px] flex-1 rounded-tl-lg rounded-bl-lg shadow-inner focus:outline-none text-black pl-2 placeholder:italic py-[1px]"
                         type="text"
                         placeholder="Search"
                    />
                    <button
                         className="h-[26px] w-[3rem] flex items-center justify-center p-0.5 overflow-hidden text-sm rounded-tr-lg rounded-br-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 "
                         title="Search"
                    >
                         <span className="flex justify-center items-center h-full w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-tr-lg rounded-br-lg group-hover:bg-opacity-0">
                              <MagnifyingGlassIcon className="h-5 w-5" />
                         </span>
                    </button>
               </form>
               <div className="md:hidden px-2 flex gap-3 ml-auto items-center">
                    <Link href="/" className="relative">
                         <ShoppingCartIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                         <span className="absolute top-0 -right-1 h-4 w-4 bg-red-700 rounded-full flex items-center justify-center text-[10px] border shadow-md">
                              {cartCount}
                         </span>
                    </Link>
                    {session && (
                         <>
                              <Link href="/">
                                   <NewspaperIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                              </Link>
                              <Link href="/">
                                   <CogIcon className="h-7 w-7 hover:text-gray-400 duartion-300" />
                              </Link>
                         </>
                    )}
               </div>
          </div>
     );
};

export default SearchBar;
