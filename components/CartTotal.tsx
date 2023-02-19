import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import CurrencyFormat from "react-currency-format";
import Link from "next/link";

const CartTotal = () => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );

     return (
          <Link
               href={"/cart"}
               className="flex p-2 items-center border-t border-gray-600 hover:bg-white/5 duration-300 hover:cursor-pointer"
               title="Cart"
          >
               <div className="relative">
                    <ShoppingCartIcon className="h-11 w-11" />
                    <span className="absolute top-0 -right-1 h-5 w-5 bg-red-700 rounded-full flex items-center justify-center text-xs border shadow-md">
                         {cartCount}
                    </span>
               </div>

               <div className="flex flex-col text-xs px-2 text-right">
                    <div className="flex">
                         <p className="text-gray-400 w-10 pr-2">Items:</p>
                         <span>{cartCount}</span>
                    </div>

                    <div className="flex text-right">
                         <p className="text-gray-400 w-10 pr-2">Total:</p>
                         <CurrencyFormat
                              value={cartCount * 50}
                              thousandSeparator={true}
                              prefix={"$"}
                              renderText={(value) => (
                                   <span className="text-orange-700">
                                        {value}
                                   </span>
                              )}
                              displayType={"text"}
                         />
                    </div>
               </div>
          </Link>
     );
};

export default CartTotal;
