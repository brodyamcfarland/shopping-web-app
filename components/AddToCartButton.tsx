import {
     MinusCircleIcon,
     PlusCircleIcon,
     PlusIcon,
     ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import { incrementByAmount, increment } from "../state/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";

const AddToCartButton = () => {
     const [items, setItems] = useState<number>(1);
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
          toast.success(`${items} Item(s) Added to Cart!`);
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
                    className="flex ml-auto mr-1 px-2 rounded-md text-sm border border-gray-600 bg-emerald-600/50 hover:bg-emerald-600/30 hover:shadow-inner duration-300"
               >
                    <ShoppingCartIcon className="h-6 w-6" />
                    <PlusIcon className="h-4 w-4" />
               </button>
          </div>
     );
};

export default AddToCartButton;
