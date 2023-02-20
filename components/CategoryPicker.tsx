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
               <div className="flex p-3 items-center justify-center overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg border-gray-600">
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
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category5
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category6
                    </Link>
                    <Link
                         href="/"
                         className="bg-black border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category7
                    </Link>
                    <Link
                         href="/"
                         className="bg-black rounded-br-md rounded-tr-md  border border-gray-600 hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]"
                    >
                         Category8
                    </Link>
               </div>
          </motion.div>
     );
};

export default CategoryPicker;
