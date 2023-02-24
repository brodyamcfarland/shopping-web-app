import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import { incrementByAmount, increment } from "../state/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RootState } from "../state/store";

const AddToCartButton = () => {
     const [items, setItems] = useState<number>(1);
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.items.length
     );
     const dispatch = useDispatch();

     const decrement = () => {
          if (items <= 1) {
               setItems(1);
          } else {
               setItems(items - 1);
          }
     };

     const addToCart = () => {
          dispatch(incrementByAmount(items));
          setItems(1);
          if (cartCount + items >= 100) {
               toast.error(
                    "The Quantity Limit has been reached (100). Please lower your quantity amount."
               );
          } else {
               toast.success(`${items} Item(s) Added to Cart!`);
          }
     };

     return (
          <div className="flex items-center gap-2">
               <div className="flex flex-1 items-center justify-start gap-1 pl-2">
                    <button
                         title="Increase Quantity"
                         className="flex items-center justify-center"
                         onClick={() => setItems(items + 1)}
                    >
                         <PlusCircleIcon className="h-8 w-8 hover:bg-white/30 rounded-full duration-300 ease-out" />
                    </button>
                    <span className="flex items-center justify-center px-1 text-md w-5">
                         {items < 0 ? 0 : items}
                    </span>
                    <button
                         className="flex items-center justify-center disabled:opacity-50"
                         onClick={() => decrement()}
                         title="Decrease Quanitity"
                         disabled={items === 1}
                    >
                         <MinusCircleIcon className="h-8 w-8 hover:bg-white/30 rounded-full duration-300 ease-out" />
                    </button>
               </div>
               <button
                    title="Add To Cart"
                    onClick={addToCart}
                    className="ml-auto  flex items-center rounded-br-lg justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 group bg-gradient-to-br from-emerald-900 to-green-400 group-hover:from-emerald-600 group-hover:to-emerald-500 hover:text-white dark:text-white focus:outline-none"
               >
                    <span className="transition-all p-2 ease-in duration-75 bg-white rounded-br-lg dark:bg-gray-900 group-hover:bg-opacity-0">
                         <PlusIcon className="h-5 w-5 shadow-md rounded-full" />
                    </span>
               </button>
          </div>
     );
};

export default AddToCartButton;
