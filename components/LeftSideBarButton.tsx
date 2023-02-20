import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface Props {
     setShowSidebar: Dispatch<SetStateAction<boolean>>;
     showSidebar: boolean;
}

const LeftSideBarButton = ({ setShowSidebar, showSidebar }: Props) => {
     return (
          <div
               title="Toggle Sidebar"
               onClick={() => setShowSidebar(!showSidebar)}
               className="hidden md:flex flex-col text-gray-300 items-center justify-center border-r border-y border-gray-600 bg-[#131313] w-3 hover:bg-white/20 shadow-inner duration-300 hover:cursor-pointer"
          >
               {showSidebar === true ? (
                    <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
               ) : (
                    <ChevronRightIcon className="h-4 w-4" strokeWidth={2} />
               )}
          </div>
     );
};

export default LeftSideBarButton;
