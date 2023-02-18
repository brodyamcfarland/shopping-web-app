import Image from "next/image";

const ProductCard = () => {
     return (
          <div className="flex justify-start flex-col border border-gray-600 rounded-lg w-[11rem] md:w-[13rem] h-[20rem] gap-2 opacity-90 hover:opacity-100 duration-300 hover:cursor-pointer">
               <Image
                    src="/SAMPLEBANNER.png"
                    height={100}
                    width={300}
                    alt="Logo"
                    className="w-full h-2/5 rounded-tr-lg rounded-tl-lg border-b border-gray-600  object-cover"
               />
               <h3 className="text-sm">Item Name</h3>
               <p className="text-xs text-gray-400 text-left px-2 line-clamp-5">
                    Description. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Fugit, ea, fuga necessitatibus dolores hic
                    ipsam numquam quia dolorum cum, sed autem. Porro est neque
                    labore impedit asperio.
               </p>
               <p className="flex-1">$50.00</p>
               <div className="flex justify-between items-center py-2 px-2">
                    <button className="border px-2 rounded-lg broder-gray-600 text-sm bg-[#171717] hover:bg-white/30 duration-300">
                         View
                    </button>
                    <button className="border px-2 rounded-lg broder-gray-600 text-sm bg-emerald-600/50 hover:bg-emerald-500/70 duarion-300">
                         Add to Cart
                    </button>
               </div>
          </div>
     );
};

export default ProductCard;
