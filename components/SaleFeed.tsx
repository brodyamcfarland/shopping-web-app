import { ProductQuery, Products } from "../types";
import ProductCard from "./ProductCard";

const SaleFeed = ({ products }: ProductQuery) => {
     return (
          <div className="flex h-[26rem] justify-center  w-full overflow-y-auto bg-[#252525] scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
               <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-10 py-4">
                    {products?.map(
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
     );
};

export default SaleFeed;
