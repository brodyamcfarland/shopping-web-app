import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import toast from "react-hot-toast";
import Currency from "react-currency-formatter";
import { incrementQuantity, removeFromCart } from "../state/slices/cartSlice";

const CartPreviewTag = () => {
     const totalQuantity = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );
     const cart = useSelector((state: RootState) => state.cartCounter.items);
     const totalPrice = useSelector(
          (state: RootState) => state.cartCounter.totalPrice
     );
     const dispatch = useDispatch();

     return (
          <div className="flex flex-col">
               {cart.map((product) => (
                    <div className="flex items-center text-left gap-2 p-2 border-b border-gray-600 bg-[#252525]">
                         <Image
                              src={product.image}
                              height={100}
                              width={100}
                              alt="Item Image"
                              className="h-12 w-12 object-contain rounded-md bg-white shadow-md"
                         />
                         <div className="flex flex-col flex-1 text-sm w-[3rem] flex-shrink">
                              <h3 className="truncate text-xs">
                                   {product.title}
                              </h3>
                              <span className="text-orange-500">
                                   <Currency quantity={product.price} />
                              </span>
                         </div>
                         <div
                              className="flex items-center justify-center border border-gray-600 font-medium rounded-md bg-black"
                              title="Quantity"
                         >
                              <button
                                   onClick={() =>
                                        dispatch(incrementQuantity(product.id))
                                   }
                                   className="h-[25px]  w-[25px] px-1 border-r border-gray-600 bg-[#171717] hover:bg-white/30 duration-300 pb-[2px] shadow-inner rounded-tl-md rounded-bl-md "
                              >
                                   +
                              </button>
                              <span className="text-center w-6 text-sm px-1">
                                   {product.quantity}
                              </span>
                              <button
                                   onClick={() =>
                                        dispatch(removeFromCart(product.id))
                                   }
                                   className="h-[25px]  w-[25px] px-1 border-l rounded-tr-md rounded-br-md bg-[#171717] hover:bg-white/30 duration-300 pb-[2px] shadow-inner border-gray-600"
                              >
                                   -
                              </button>
                         </div>
                    </div>
               ))}
               <div className="flex items-center text-xs text-left px-1 py-[2px] border-b border-gray-600">
                    <span className="text-gray-500 w-fit uppercase text-[9px] pr-2">
                         Sub-total
                    </span>
                    <span className="text-orange-700">
                         <Currency quantity={totalPrice} />
                    </span>
               </div>
          </div>
     );
};

export default CartPreviewTag;
