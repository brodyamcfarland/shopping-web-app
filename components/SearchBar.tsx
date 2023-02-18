import {
     CogIcon,
     NewspaperIcon,
     ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
     cartCount: number;
}

const SearchBar = ({ cartCount }: Props) => {
     const { data: session } = useSession();
     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {};

     return (
          <div className="flex h-10 items-center pl-2 py-2 md:pl-0 md:justify-center bg-[#171717] text-white shadow-xl border-b border-gray-600">
               <form
                    className="flex mx-1 w-full md:w-[25rem] lg:w-[30rem] divide-x-[1px] divide-gray-600 rounded-lg shadow-lg "
                    onSubmit={handleSearch}
               >
                    <input
                         className="flex-1 rounded-tl-lg rounded-bl-lg shadow-inner focus:outline-none text-black pl-2 placeholder:italic py-[1px]"
                         type="text"
                         placeholder="Search"
                    />
                    <button
                         className="px-2 rounded-tr-lg rounded-br-lg hover:shadow bg-orange-900/90 hover:bg-orange-800 duration-300 "
                         title="Search"
                    >
                         <MagnifyingGlassIcon className="h-5 w-5" />
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
