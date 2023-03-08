import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface Props {
     setShowRightSidebar: Dispatch<SetStateAction<boolean>>;
     showRightSidebar: boolean;
}

const RightSideBarButton = ({
     setShowRightSidebar,
     showRightSidebar,
}: Props) => {
     return (
          <div
               title="Toggle Sidebar"
               onClick={() => setShowRightSidebar(!showRightSidebar)}
               className={`${
                    showRightSidebar === false &&
                    "animate-pulse px-2 bg-white/20"
               } hidden lg:flex flex-col text-gray-300 items-center justify-center border-l border-y border-gray-600 bg-[#131313] w-3 hover:bg-white/30 shadow-inner duration-300 hover:cursor-pointer`}
          >
               {showRightSidebar === true ? (
                    <ChevronRightIcon className="h-4 w-4" strokeWidth={2} />
               ) : (
                    <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
               )}
          </div>
     );
};

export default RightSideBarButton;
