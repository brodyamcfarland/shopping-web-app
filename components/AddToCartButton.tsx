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
          (state: RootState) => state.cartCounter.value
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
          <div className="flex items-center gap-2 px-2 py-1">
               <button
                    title="Increase Quantity"
                    className="flex items-center justify-center"
                    onClick={() => setItems(items + 1)}
               >
                    <PlusCircleIcon className="h-6 w-6 hover:bg-white/30 rounded-full duration-300 ease-out" />
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
                    <MinusCircleIcon className="h-6 w-6 hover:bg-white/30 rounded-full duration-300 ease-out" />
               </button>
               <button
                    title="Add To Cart"
                    onClick={addToCart}
                    className="ml-auto mr-1 flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-full group bg-gradient-to-br from-emerald-900 to-green-400 group-hover:from-emerald-600 group-hover:to-emerald-500 hover:text-white dark:text-white focus:outline-none focus:ring-green-300"
               >
                    <span className="transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                         <PlusIcon className="h-5 w-5 shadow-md rounded-full" />
                    </span>
               </button>
          </div>
     );
};

export default AddToCartButton;
