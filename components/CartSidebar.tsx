import { useRouter } from "next/router";
import CartPreviewTag from "./CartPreviewTag";
import CartTotal from "./CartTotal";
import CheckoutButton from "./CheckoutButton";
import { motion } from "framer-motion";

const CartSidebar = () => {
     const router = useRouter();

     return (
          <motion.nav
               initial={{ x: 250 }}
               animate={{ x: 0 }}
               transition={{
                    duration: 0.05,
                    default: { ease: "linear" },
               }}
               className="hidden md:flex flex-col w-[16rem] max-w-[20rem] border bg-[#171717] shadow-md border-gray-600 h-screen"
          >
               <h3 className="font-medium text-md py-1 border-b border-gray-600">
                    Cart Preview
               </h3>

               <div className="flex flex-col flex-1 overflow-y-auto scrollbar-thin">
                    <CartPreviewTag />
               </div>
               <CheckoutButton />
               <CartTotal />
          </motion.nav>
     );
};

export default CartSidebar;
