import { AiOutlineGithub } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
     return (
          <footer className="flex bg-[#171717] h-7 w-full items-center justify-center text-[10px] text-gray-300 border-y border-gray-600 gap-4">
               <span className="text-gray-600 ">
                    &copy; 2023 Created By: Brody McFarland
               </span>
               <div className="flex gap-3">
                    <Link
                         href="/"
                         className="opacity-50 hover:opacity-100 duration-300"
                    >
                         <AiOutlineGithub size={15} />
                    </Link>
                    <Link
                         href="/"
                         className="opacity-50 hover:opacity-100 duration-300"
                    >
                         <RxTwitterLogo size={15} />
                    </Link>
                    <Link
                         href="/"
                         className="opacity-50 hover:opacity-100 duration-300"
                    >
                         <BiWorld size={15} />
                    </Link>
               </div>
          </footer>
     );
};

export default Footer;
