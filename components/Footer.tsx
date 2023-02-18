import { AiOutlineGithub } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
     return (
          <footer className="flex bg-[#171717] h-7 w-full items-center justify-center text-[10px] text-gray-300 border-t border-gray-600 gap-4">
               <span>&copy; 2023 Created By: Brody McFarland</span>
               <div className="flex gap-3">
                    <Link
                         href="/"
                         className="opacity-70 hover:opacity-100 duration-300"
                    >
                         <AiOutlineGithub size={20} />
                    </Link>
                    <Link
                         href="/"
                         className="opacity-70 hover:opacity-100 duration-300"
                    >
                         <RxTwitterLogo size={20} />
                    </Link>
                    <Link
                         href="/"
                         className="opacity-70 hover:opacity-100 duration-300"
                    >
                         <BiWorld size={20} />
                    </Link>
               </div>
          </footer>
     );
};

export default Footer;
