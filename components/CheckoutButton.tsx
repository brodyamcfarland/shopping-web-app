const CheckoutButton = () => {
     return (
          <button className="mx-auto my-4 flex items-center justify-center p-0.5 overflow-hidden text-sm font-mediums text-gray-900 rounded-lg group bg-gradient-to-br from-red-600/50 to-purple-500/50 group-hover:from-red-600 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800">
               <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Checkout
               </span>
          </button>
     );
};

export default CheckoutButton;
