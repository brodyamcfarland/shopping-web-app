import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import CartSidebar from "./CartSidebar";

interface Props {
     children: ReactNode;
}

const Layout = ({ children }: Props) => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.value
     );
     return (
          <div className="flex flex-col min-h-screen md:h-screen text-white text-center bg-black">
               <div className="flex flex-col md:flex-row flex-1 ">
                    <MobileHeader />
                    <Sidebar />
                    <main className="flex relative flex-col w-full h-screen ">
                         <SearchBar />
                         <Banner />
                         {children}
                         <Footer />
                    </main>
                    {cartCount > 0 && <CartSidebar />}
               </div>
          </div>
     );
};

export default Layout;
