import ProductCard from "./ProductCard";
import { ProductQuery, Products } from "../types";

const ProductCards = ({ products }: ProductQuery) => {
     return (
          <div className="flex justify-center w-full overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
               <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 py-4">
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
                    <div className="h-[3rem]" />
               </div>
          </div>
     );
};

export default ProductCards;
