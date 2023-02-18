import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MobileHeader from "../components/MobileHeader";
import { decrement, increment } from "../state/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";

const Checkout = () => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );
     const dispatch = useDispatch();

     return (
          <div className="flex flex-col h-screen text-white bg-black">
               <Head>
                    <title>Shopping</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex flex-col md:flex-row flex-1 items">
                    <MobileHeader />
                    <Sidebar cartCount={cartCount} />
                    <main className="flex flex-col flex-1">
                         <SearchBar cartCount={cartCount} />
                         <h2>Welcome</h2>
                         <p>Count = {cartCount}</p>
                    </main>
               </div>
               <Footer />
          </div>
     );
};

export default Checkout;
