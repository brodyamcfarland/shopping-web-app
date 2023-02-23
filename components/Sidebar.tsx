import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
     ArrowLeftOnRectangleIcon,
     CogIcon,
     HomeIcon,
     InformationCircleIcon,
     NewspaperIcon,
     RectangleGroupIcon,
     ShoppingCartIcon,
     StarIcon,
     TagIcon,
} from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import SignInButton from "./SignInButton";
import { motion } from "framer-motion";
import Profile from "./Profile";

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
               className="hidden md:flex flex-col min-w-[16rem] max-w-[20rem] border bg-[#171717] shadow-md border-gray-600"
          >
               <div className="flex flex-col h-full w-full">
                    <div
                         onClick={() => router.push("/")}
                         className="flex items-center gap-2 hover:cursor-pointer opacity-80 hover:opacity-100 duration-300"
                    >
                         <Image
                              src="/GET_MEDIUM_BANNER.png"
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
                                   <HomeIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                   />
                                   <span className="">Home</span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/cart"
                                   title="Cart"
                              >
                                   <ShoppingCartIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                   />
                                   <p className="flex-1 text-left">Cart</p>
                                   <span className="h-5 w-5 bg-red-700 rounded-full flex items-center justify-center text-xs border shadow-md">
                                        {cartCount}
                                   </span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/categories"
                                   title="Categories"
                              >
                                   <RectangleGroupIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                   />
                                   <span>Categories</span>
                              </Link>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/sale"
                                   title="Deals"
                              >
                                   <TagIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                   />
                                   <span>Deals</span>
                              </Link>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, x: -200 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                         >
                              <Link
                                   className="sidebarButtons"
                                   href="/about"
                                   title="About"
                              >
                                   <InformationCircleIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                   />
                                   <span>About</span>
                              </Link>
                         </motion.div>

                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.5 }}
                              >
                                   <Link
                                        className="sidebarButtons"
                                        href="/orders"
                                        title="Orders"
                                   >
                                        <NewspaperIcon
                                             className="h-6 w-6"
                                             strokeWidth={2}
                                        />
                                        <span>Orders</span>
                                   </Link>
                              </motion.div>
                         )}
                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.6 }}
                              >
                                   <Link
                                        className="sidebarButtons"
                                        href="/settings"
                                        title="Settings"
                                   >
                                        <CogIcon
                                             className="h-6 w-6"
                                             strokeWidth={2}
                                        />
                                        <span>Settings</span>
                                   </Link>
                              </motion.div>
                         )}
                         {session && (
                              <motion.div
                                   initial={{ opacity: 0, x: -200 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.5, delay: 0.7 }}
                              >
                                   <button
                                        className="sidebarButtons"
                                        onClick={() => signOut()}
                                   >
                                        <ArrowLeftOnRectangleIcon
                                             className="h-6 w-6"
                                             strokeWidth={2}
                                        />
                                        <span>Sign Out</span>
                                   </button>
                              </motion.div>
                         )}
                    </div>
                    {session ? (
                         <div className="border-t border-gray-600 h-20 flex items-center">
                              <Profile />
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
