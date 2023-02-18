import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import MobileHeader from "../components/MobileHeader";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../state/store";
import Banner from "../components/Banner";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";

const Home: NextPage = () => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );

     return (
          <div className="flex flex-col min-h-screen md:h-screen text-white text-center bg-black ">
               <Head>
                    <title>Shopping</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex flex-col md:flex-row flex-1 ">
                    <MobileHeader />
                    <Sidebar cartCount={cartCount} />
                    <main className="flex flex-col w-full h-screen ">
                         <SearchBar cartCount={cartCount} />
                         <Banner />
                         <ProductCards />
                         <Footer />
                    </main>
               </div>
          </div>
     );
};

export default Home;
