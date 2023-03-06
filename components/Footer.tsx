import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
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
                         href="https://github.com/brodyamcfarland"
                         target="_blank"
                         className="opacity-50 hover:opacity-100 duration-300"
                         title="Github"
                    >
                         <AiOutlineGithub size={15} />
                    </Link>
                    <Link
                         href="https://twitter.com/off2eth"
                         target="_blank"
                         className="opacity-50 hover:opacity-100 duration-300"
                         title="Dev Twitter"
                    >
                         <RxTwitterLogo size={15} />
                    </Link>
                    <Link
                         href="https://website-v3-orcin.vercel.app/"
                         target="_blank"
                         className="opacity-50 hover:opacity-100 duration-300"
                         title="Dev Website"
                    >
                         <BiWorld size={15} />
                    </Link>
                    <Link
                         href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/"
                         target="_blank"
                         className="opacity-50 hover:opacity-100 duration-300"
                         title="LinkedIn"
                    >
                         <AiOutlineLinkedin size={15} />
                    </Link>
               </div>
          </footer>
     );
};

export default Footer;
