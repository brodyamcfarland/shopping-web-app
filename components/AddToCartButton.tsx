import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import { addToCartByAmount } from "../state/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/solid";
import { RootState } from "../state/store";
import { Items } from "../types";

interface Props {
     id: number;
     title: string;
     price: number;
     description: string;
     image: string;
     category: string;
}

const AddToCartButton = ({
     id,
     title,
     price,
     description,
     image,
     category,
}: Props) => {
     const [quantity, setQuantity] = useState<number>(1);
     const cart = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );
     const dispatch = useDispatch();

     const increment = () => {
          if (quantity >= 99) {
               setQuantity(99);
               toast.error("Max Quantity Reached. (99)");
          } else {
               setQuantity(quantity + 1);
          }
     };

     const decrement = () => {
          if (quantity <= 1) {
               setQuantity(1);
          } else {
               setQuantity(quantity - 1);
          }
     };

     const addToCart = () => {
          let itemToAdd: Items = {
               id: id,
               title: title,
               price: price,
               description: description,
               image: image,
               quantity: quantity,
               category: category,
          };
          dispatch(addToCartByAmount(itemToAdd));
          setQuantity(1);
          if (cart + quantity >= 100) {
               toast.error(
                    "You have reached the Maximum Cart Limit (99). Create a seperate order or update your cart."
               );
          } else {
               toast.success(`${quantity} Item(s) Added to Cart!`);
          }
     };

     return (
          <div className="flex items-center gap-2 select-none">
               <div className="flex flex-1 items-center justify-start gap-1 pl-2">
                    <button
                         title="Increase Quantity"
                         className="flex items-center justify-center"
                         onClick={() => increment()}
                    >
                         <PlusCircleIcon className="h-8 w-8 hover:bg-white/30 rounded-full duration-300 ease-out" />
                    </button>
                    <span className="flex items-center justify-center px-1 text-md w-5">
                         {quantity < 0 ? 0 : quantity}
                    </span>
                    <button
                         className="flex items-center justify-center disabled:opacity-50"
                         onClick={() => decrement()}
                         title="Decrease Quanitity"
                         disabled={quantity === 1}
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
