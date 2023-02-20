import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { useRouter } from "next/router";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProductCard = () => {
     const router = useRouter();
     return (
          <motion.div
               whileHover={{
                    scale: 1.02,
               }}
               whileTap={{ scale: 1 }}
               className="flex select-none relative justify-start flex-col bg-[#171717] hover:bg-[#0e0e0e] border border-gray-600 rounded-lg w-[11rem] md:w-[13rem] h-[20rem] gap-2 opacity-90 hover:opacity-100 duration-300"
          >
               <Image
                    src="/SAMPLEBANNER.png"
                    height={100}
                    width={300}
                    alt="Logo"
                    className="w-full h-2/5 rounded-tr-lg rounded-tl-lg border-b border-gray-600  object-cover hover:cursor-pointer hover:brightness-125 duration-300"
                    onClick={() => router.push("/shop")}
               />
               <h3 className="text-sm">Item Name</h3>
               <p className="text-xs text-gray-400 text-left px-2 line-clamp-4">
                    Description. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Fugit, ea, fuga necessitatibus dolores hic
                    ipsam numquam quia dolorum cum, sed autem. Porro est neque
                    labore impedit asperio.
               </p>
               <div className="flex w-fit m-auto">
                    <span className="text-[11px] font-semibold text-gray-500 pr-[3px]">
                         $
                    </span>
                    <p className="flex-1 text-orange-500 font-bold pr-2 text-lg py-1">
                         50.00
                    </p>
               </div>

               <AddToCartButton />
               <div
                    className="absolute top-2 left-3"
                    onClick={() => router.push("/shop")}
               >
                    <EllipsisVerticalIcon className="h-6 w-6 hover:bg-white/5 rounded-full hover:cursor-pointer" />
               </div>
          </motion.div>
     );
};

export default ProductCard;
