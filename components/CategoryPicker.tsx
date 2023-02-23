import Link from "next/link";
import { motion } from "framer-motion";

const CategoryPicker = () => {
     return (
          <motion.div
               initial={{ y: -50, opacity: 50, zIndex: -30 }}
               animate={{ y: 0, opacity: 100, zIndex: 0 }}
               transition={{ duration: 0.3 }}
               className="border-b  border-gray-600 gap-2 text-sm bg-[#171717]"
          >
               <div className="flex p-3 items-center justify-center border-gray-600 text-xs md:text-sm">
                    <Link
                         href="/"
                         className="bg-black rounded-tl-md rounded-bl-md border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category1
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category2
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category3
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category4
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] rounded-br-md rounded-tr-md md:rounded-br-none md:rounded-tr-none"
                    >
                         Category5
                    </Link>
                    <Link
                         href="/"
                         className="hidden md:block bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] rounded-br-none rounded-tr-none md:rounded-br-md md:rounded-tr-md lg:rounded-br-none lg:rounded-tr-none"
                    >
                         Category6
                    </Link>
                    <Link
                         href="/"
                         className="hidden lg:block bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category7
                    </Link>
                    <Link
                         href="/"
                         className="hidden lg:block bg-black rounded-br-md rounded-tr-md  border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category8
                    </Link>
               </div>
          </motion.div>
     );
};

export default CategoryPicker;
