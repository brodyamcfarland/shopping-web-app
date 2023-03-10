import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const CheckoutButton = () => {
     const { data: session } = useSession();
     return (
          <>
               {session ? (
                    <Link
                         href="/checkout"
                         className="mx-auto my-4 flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-red-600/50 to-purple-500/50 group-hover:from-red-600 group-hover:to-purple-500 hover:text-white dark:text-white focus:outline-none"
                    >
                         <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Checkout
                         </span>
                    </Link>
               ) : (
                    <button
                         onClick={() => signIn()}
                         title="Sign in to Checkout"
                         className="select-none mx-auto my-4 flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-red-600/50 to-gray-500/50 group-hover:from-red-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:outline-none"
                    >
                         <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Sign in to Checkout
                         </span>
                    </button>
               )}
          </>
     );
};

export default CheckoutButton;
