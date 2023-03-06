import { motion } from "framer-motion";
import { useState } from "react";
import { ProductQuery, Products } from "../types";
import ProductCard from "./ProductCard";

const CategoryPicker = ({ products }: ProductQuery) => {
     // Defaulted to Men's Clothing, Price: Low to High
     const [filter, setFilter] = useState<string>("men's clothing");
     const [priceFilter, setPriceFilter] = useState<boolean>(true);

     return (
          <>
               <motion.div
                    initial={{ y: -50, opacity: 50, zIndex: -30 }}
                    animate={{ y: 0, opacity: 100, zIndex: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b  border-gray-600 gap-2 bg-[#171717]"
               >
                    <div className="flex p-3 items-center justify-center border-gray-600 text-[10px] md:text-sm">
                         <button
                              onClick={() => setFilter("men's clothing")}
                              className={`bg-black rounded-tl-md rounded-bl-md border ${
                                   filter === "men's clothing"
                                        ? "bg-purple-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]`}
                         >
                              Mens
                         </button>
                         <button
                              onClick={() => setFilter("women's clothing")}
                              className={`bg-black border ${
                                   filter === "women's clothing"
                                        ? "bg-purple-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px]`}
                         >
                              Womens
                         </button>
                         <button
                              onClick={() => setFilter("electronics")}
                              className={`bg-black border ${
                                   filter === "electronics"
                                        ? "bg-purple-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] rounded-r-md md:rounded-none mr-2 md:mr-0`}
                         >
                              Electronics
                         </button>
                         <button
                              onClick={() => setFilter("jewelery")}
                              className={`hidden md:block bg-black border ${
                                   filter === "jewelery"
                                        ? "bg-purple-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] mr-2 rounded-r-md`}
                         >
                              Jewelry
                         </button>
                         <button
                              onClick={() => setPriceFilter(true)}
                              className={`bg-black border ${
                                   priceFilter
                                        ? "bg-green-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] rounded-l-md`}
                         >
                              <span className="text-green-400">Price:</span> Low
                         </button>
                         <button
                              onClick={() => setPriceFilter(false)}
                              className={`bg-black border ${
                                   !priceFilter
                                        ? "bg-green-600/20"
                                        : "border-gray-600"
                              } hover:border-gray-300 hover:bg-white/10 duration-300 px-2 py-[3px] rounded-r-md`}
                         >
                              <span className="text-green-400">Price:</span>{" "}
                              High
                         </button>
                    </div>
               </motion.div>
               <div className="flex justify-center w-full overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-5 py-4">
                         {products
                              ?.filter(
                                   (fProduct) => fProduct.category === filter
                              )
                              .sort((a, b) =>
                                   priceFilter
                                        ? a.price - b.price
                                        : b.price - a.price
                              )
                              .map(
                                   ({
                                        id,
                                        title,
                                        price,
                                        description,
                                        category,
                                        image,
                                   }: Products) => (
                                        <ProductCard
                                             key={id}
                                             id={id}
                                             title={title}
                                             price={price}
                                             description={description}
                                             category={category}
                                             image={image}
                                        />
                                   )
                              )}
                    </div>
                    <div className="h-[60rem]" />
               </div>
          </>
     );
};

export default CategoryPicker;
