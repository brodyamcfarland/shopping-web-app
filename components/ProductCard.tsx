import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { useRouter } from "next/router";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Currency from "react-currency-formatter";

interface Props {
     id: number;
     title: string;
     price: number;
     description: string;
     category: string;
     image: string;
}

const ProductCard = ({ id, title, price, description, image }: Props) => {
     const router = useRouter();
     return (
          <div className="flex relative justify-start flex-col bg-[#171717] hover:bg-[#0e0e0e] border border-gray-600 rounded-lg w-[11rem] md:w-[13rem] lg:w-[14rem] xl:w-[15rem] h-[24rem] gap-2 opacity-90 hover:opacity-100 duration-300">
               <Image
                    src={image}
                    height={100}
                    width={300}
                    alt=""
                    className="w-full h-2/5 rounded-tr-lg rounded-tl-lg border-b border-gray-600 bg-white object-contain hover:cursor-pointer hover:brightness-125 duration-300"
                    onClick={() => router.push("/shop")}
               />
               <h3 className="text-sm px-2 font-semibold line-clamp-2">
                    {title}
               </h3>
               <p className="text-xs text-gray-400 text-left px-2 line-clamp-4">
                    {description}
               </p>
               <div className="flex w-fit m-auto select-none text-orange-500 pr-1">
                    <Currency quantity={price} />
               </div>

               <AddToCartButton
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    image={image}
               />
               <div
                    className="absolute top-2 left-3"
                    onClick={() => router.push("/shop")}
               >
                    <EllipsisVerticalIcon className="h-6 w-6 hover:bg-white/5 rounded-full hover:cursor-pointer" />
               </div>
          </div>
     );
};

export default ProductCard;
