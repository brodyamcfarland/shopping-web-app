import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MobileButtons from "./MobileButtons";
import { useState } from "react";

const SearchBar = () => {
     // Need to flush out search functionality
     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {};

     const [showMoreButtons, setShowMoreButtons] = useState<boolean>(false);

     return (
          <div className="flex py-2 items-center md:justify-center bg-[#171717] text-white shadow-xl border-y border-gray-600">
               {showMoreButtons === false && (
                    <form
                         className="flex mx-1 w-3/4 md:max-w-[25rem] lg:w-[30rem] divide-x-[1px] divide-gray-600 rounded-lg shadow-lg "
                         onSubmit={handleSearch}
                    >
                         <input
                              className="h-[26px] focus:border-2 border-purple-700 bg-black flex-1 rounded-tl-lg rounded-bl-lg shadow-inner focus:outline-none pl-2 placeholder:italic py-[1px]"
                              type="text"
                              placeholder="Search..."
                         />
                         <button
                              className="h-[26px] w-[3rem] flex items-center justify-center p-0.5 overflow-hidden text-sm rounded-tr-lg rounded-br-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
                              title="Search"
                         >
                              <span className="flex justify-center items-center h-full w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-tr-lg rounded-br-lg group-hover:bg-opacity-0">
                                   <MagnifyingGlassIcon className="h-5 w-5" />
                              </span>
                         </button>
                    </form>
               )}

               <MobileButtons
                    showMoreButtons={showMoreButtons}
                    setShowMoreButtons={setShowMoreButtons}
               />
          </div>
     );
};

export default SearchBar;
