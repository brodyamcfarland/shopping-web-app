import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Footer from "./Footer";

interface Props {
     children: ReactNode;
}

const Layout = ({ children }: Props) => {
     return (
          <div className="flex flex-col min-h-screen md:h-screen text-white text-center bg-black ">
               <div className="flex flex-col md:flex-row flex-1 ">
                    <MobileHeader />
                    <Sidebar />
                    <main className="flex flex-col w-full h-screen ">
                         <SearchBar />
                         <Banner />
                         {children}
                         <Footer />
                    </main>
               </div>
          </div>
     );
};

export default Layout;
