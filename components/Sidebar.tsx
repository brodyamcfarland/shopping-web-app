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

interface Props {
     cartCount: number;
}

const Sidebar = ({ cartCount }: Props) => {
     const router = useRouter();
     const { data: session } = useSession();

     return (
          <header className="hidden md:flex flex-col w-[20rem] max-w-[20rem] border bg-[#171717] shadow-md border-gray-600">
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
                         <Link className="sidebarButtons" href="/" title="Home">
                              <HomeIcon className="h-5 w-5" />
                              <span>Home</span>
                         </Link>
                         <Link
                              className="sidebarButtons"
                              href="/"
                              title="Categories"
                         >
                              <RectangleGroupIcon className="h-5 w-5" />
                              <span>Catgories</span>
                         </Link>
                         <Link
                              className="sidebarButtons"
                              href="/"
                              title="New Arrivals"
                         >
                              <StarIcon className="h-5 w-5" />
                              <span>New Arrivals</span>
                         </Link>
                         <Link
                              className="sidebarButtons"
                              href="/"
                              title="New Deals"
                         >
                              <TagIcon className="h-5 w-5" />
                              <span>New Deals</span>
                         </Link>
                         {session && (
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="Order History"
                              >
                                   <NewspaperIcon className="h-5 w-5" />
                                   <span>Order History</span>
                              </Link>
                         )}
                         <Link className="sidebarButtons" href="/" title="Cart">
                              <ShoppingCartIcon className="h-5 w-5" />
                              <p className="flex-1 text-left">Cart</p>
                              <span className="h-5 w-5 bg-red-700 rounded-full flex items-center justify-center text-xs border shadow-md">
                                   {cartCount}
                              </span>
                         </Link>
                         {session && (
                              <Link
                                   className="sidebarButtons"
                                   href="/"
                                   title="Settings"
                              >
                                   <CogIcon className="h-5 w-5" />
                                   <span>Settings</span>
                              </Link>
                         )}
                         {session && (
                              <button
                                   className="sidebarButtons"
                                   onClick={() => signOut()}
                              >
                                   <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                                   <span>Sign Out</span>
                              </button>
                         )}
                    </div>
                    {session ? (
                         <div
                              className="flex h-20 gap-2 p-2 items-center hover:cursor-pointer border-t border-gray-600 hover:bg-white/5 hover:underline"
                              title="Sign Out"
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
                         <div
                              className="flex h-20 gap-2 p-2 items-center justify-center hover:cursor-pointer border-t border-gray-600"
                              title="Sign In"
                         >
                              <button
                                   onClick={() => signIn()}
                                   className="border border-gray-600 px-8 py-2 rounded-lg bg-gradient-to-br from-blue-800/50 to-black/50 hover:to-blue-800 shadow-lg"
                              >
                                   Sign In
                              </button>
                         </div>
                    )}

                    <div
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
                                   <p className="text-gray-400 w-10 pr-2">
                                        Items:
                                   </p>
                                   <span>{cartCount}</span>
                              </div>

                              <div className="flex text-right">
                                   <p className="text-gray-400 w-10 pr-2">
                                        Total:
                                   </p>
                                   <span>$ {cartCount * 50}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
};

export default Sidebar;
