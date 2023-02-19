import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import CartPreviewTag from "./CartPreviewTag";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import { motion } from "framer-motion";

const CartSidebar = () => {
     const router = useRouter();
     const { data: session } = useSession();
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );

     return (
          <motion.nav
               initial={{ x: 250 }}
               animate={{ x: 0 }}
               transition={{
                    duration: 0.05,
                    default: { ease: "linear" },
               }}
               className="hidden md:flex flex-col w-[20rem] max-w-[20rem] border bg-[#171717] shadow-md border-gray-600"
          >
               <div className="flex flex-col h-full w-full">
                    <div
                         onClick={() => router.push("/")}
                         className="flex items-center justify-center gap-2 border-b border-gray-600 hover:cursor-pointer opacity-80 hover:opacity-100 duration-300"
                    >
                         <h3 className="font-medium text-md py-1">
                              Cart Preview
                         </h3>
                    </div>
                    <div className="flex flex-1 flex-col overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
                         <CartPreviewTag />
                    </div>
                    <CheckoutButton />
                    <CartTotal />
               </div>
          </motion.nav>
     );
};

export default CartSidebar;
