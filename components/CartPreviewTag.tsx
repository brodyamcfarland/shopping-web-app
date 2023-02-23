import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/slices/cartSlice";
import { RootState } from "../state/store";
import toast from "react-hot-toast";
import CurrencyFormat from "react-currency-format";

const CartPreviewTag = () => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );
     const [previewQty, setPreviewQty] = useState<number>(0);
     const dispatch = useDispatch();
     const minusOneOrDelete = () => {
          dispatch(decrement());
          toast.success(`"Removed "Item Name"`);
     };
     const addToCart = () => {
          dispatch(increment());
          toast.success(`"Item Name" Added to Cart!`);
     };

     return (
          <div className="flex flex-col">
               <div className="flex items-center text-left gap-2 p-2 border-b border-gray-600 bg-[#252525]">
                    <Image
                         src={"/SAMPLE_BANNER.png"}
                         height={100}
                         width={100}
                         alt="Item Image"
                         className="h-12 w-12 object-contain rounded-md"
                    />
                    <div className="flex flex-col flex-1 text-sm w-[3rem] flex-shrink">
                         <h3 className="truncate text-xs">Item Name</h3>
                         <h4 className="text-orange-500">$50.00</h4>
                    </div>
                    <div
                         className="flex items-center justify-center border border-gray-600 font-medium rounded-md bg-black"
                         title="Quantity"
                    >
                         <button
                              onClick={addToCart}
                              className="h-[25px]  w-[25px] px-1 border-r border-gray-600 bg-[#171717] hover:bg-white/30 duration-300 pb-[2px] shadow-inner rounded-tl-md rounded-bl-md "
                         >
                              +
                         </button>
                         <span className="text-center w-6 text-sm px-1">
                              {cartCount}
                         </span>
                         <button
                              onClick={() => minusOneOrDelete()}
                              className="h-[25px]  w-[25px] px-1 border-l rounded-tr-md rounded-br-md bg-[#171717] hover:bg-white/30 duration-300 pb-[2px] shadow-inner border-gray-600"
                         >
                              -
                         </button>
                    </div>
               </div>
               <div className="flex items-center text-xs text-left px-1 py-[2px] border-b border-gray-600">
                    <span className="text-gray-500 w-fit uppercase text-[9px]">
                         Sub-total
                    </span>
                    <CurrencyFormat
                         value={cartCount * 50}
                         thousandSeparator={true}
                         prefix={"$"}
                         renderText={(value) => (
                              <span className="text-orange-500 pl-2">
                                   {value}
                              </span>
                         )}
                         displayType={"text"}
                    />
               </div>
          </div>
     );
};

export default CartPreviewTag;
