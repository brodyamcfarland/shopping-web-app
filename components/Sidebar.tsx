import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
     ArrowLeftOnRectangleIcon,
     CogIcon,
     HomeIcon,
     NewspaperIcon,
     RectangleGroupIcon,
     ShoppingCartIcon,
     StarIcon,
     TagIcon,
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import SignInButton from "./SignInButton";
import { motion } from "framer-motion";

const Sidebar = () => {
     const router = useRouter();
     const { data: session } = useSession();
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );

     return (
          <motion.header
               initial={{ x: -200 }}
               animate={{ x: 0 }}
               transition={{ duration: 0.3, delay: 0 }}
               className="hidden md:flex flex-col w-[20rem] max-w-[20rem] border bg-[#171717] shadow-md border-gray-600"
          >
               <div className="flex flex-col h-full w-full">
                    <div
                         onClick={() => router.push("/")}
                         className="flex items-center gap-2 hover:cursor-pointer opacity-80 hover:opacity-100 duration-300"
                    >
                         <Image
                              src="/SAMPLEBANNER.png"
                              height={100}
                              width={300}
                              alt="Logo"
                              title="Home"
                              className="w-full max-h-[4.5rem]  object-cover"
                         />
                    </div>
                    <div className="flex flex-1 flex-col p-2 gap-2 border-t  border-gray-600 overflow-y-auto">
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="Home"
                              >
                                   <HomeIcon className="h-5 w-5" />
                                   <span>Home</span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="Categories"
                              >
                                   <RectangleGroupIcon className="h-5 w-5" />
                                   <span>Catgories</span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="New Arrivals"
                              >
                                   <StarIcon className="h-5 w-5" />
                                   <span>New Arrivals</span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="Deals"
                              >
                                   <TagIcon className="h-5 w-5" />
                                   <span>Deals</span>
                              </Link>
                         </motion.div>
                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.35 }}
                              >
                                   <Link
                                        className="sidebarButtons"
                                        href="/"
                                        title="Order History"
                                   >
                                        <NewspaperIcon className="h-5 w-5" />
                                        <span>Order History</span>
                                   </Link>
                              </motion.div>
                         )}
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/cart"
                                   title="Cart"
                              >
                                   <ShoppingCartIcon className="h-5 w-5" />
                                   <p className="flex-1 text-left">Cart</p>
                                   <span className="pb-[2px] h-5 w-5 bg-red-700 rounded-full flex items-center justify-center text-xs border shadow-md">
                                        {cartCount}
                                   </span>
                              </Link>
                         </motion.div>
                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.45 }}
                              >
                                   <Link
                                        className="sidebarButtons"
                                        href="/"
                                        title="Settings"
                                   >
                                        <CogIcon className="h-5 w-5" />
                                        <span>Settings</span>
                                   </Link>
                              </motion.div>
                         )}
                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.5 }}
                              >
                                   <button
                                        className="sidebarButtons"
                                        onClick={() => signOut()}
                                   >
                                        <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                                        <span>Sign Out</span>
                                   </button>
                              </motion.div>
                         )}
                    </div>
                    {session ? (
                         <div
                              className="flex h-20 gap-2 p-2 items-center hover:cursor-pointer border-t border-gray-600 hover:bg-white/5 hover:underline"
                              title="Settings"
                         >
                              <Image
                                   src={`${session?.user?.image}`}
                                   height={100}
                                   width={100}
                                   alt="Logo"
                                   className="h-12 w-12 object-contain rounded-full"
                              />
                              <div className="flex flex-col opacity-80 hover:opacity-100 w-[11.45rem]">
                                   <span className="text-white text-left font-semibold text-sm">
                                        {session?.user?.name}
                                   </span>
                                   <p className="text-gray-400 text-xs text-left truncate">
                                        {session?.user?.email}
                                   </p>
                              </div>
                         </div>
                    ) : (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.8 }}
                              className="flex h-20 p-2 items-center justify-center hover:cursor-pointer border-t border-gray-600"
                              title="Sign In"
                         >
                              <SignInButton />
                         </motion.div>
                    )}
               </div>
          </motion.header>
     );
};

export default Sidebar;
