import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import CartSidebar from "./CartSidebar";
import LeftSideBarButton from "./LeftSideBarButton";
import { useState } from "react";
import RightSideBarButton from "./RightSideBarButton";

interface Props {
     children: ReactNode;
}

const Layout = ({ children }: Props) => {
     const cartCount = useSelector(
          (state: RootState) => state.cartCounter.totalQuantity
     );
     const [showSidebar, setShowSidebar] = useState<boolean>(true);
     const [showRightSidebar, setShowRightSidebar] = useState<boolean>(true);

     return (
          <div className="flex flex-col min-h-screen md:h-screen text-white text-center bg-black overflow-x-hidden">
               <div className="flex flex-col md:flex-row flex-1 ">
                    <MobileHeader />
                    {showSidebar && <Sidebar />}

                    <LeftSideBarButton
                         setShowSidebar={setShowSidebar}
                         showSidebar={showSidebar}
                    />
                    <main className="flex relative flex-col w-full h-screen ">
                         <SearchBar />
                         <Banner />
                         {children}
                         <Footer />
                    </main>
                    {cartCount > 0 && (
                         <div className="flex">
                              <RightSideBarButton
                                   showRightSidebar={showRightSidebar}
                                   setShowRightSidebar={setShowRightSidebar}
                              />
                              {showRightSidebar && <CartSidebar />}
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Layout;
