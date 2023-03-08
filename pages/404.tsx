import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const Custom404 = () => {
     return (
          <Layout>
               <div className="flex flex-col flex-1 items-center pt-10 px-2 gap-5">
                    <Image
                         src="/GET_BOX_LOGO.png"
                         height={300}
                         width={300}
                         alt="Logo"
                         className="border-[2px] h-52 w-52 border-gray-600 rounded-full object-cover hover:cursor-pointer"
                    />
                    <h1 className="text-2xl">404 Error</h1>
                    <p className="text-gray-500">This route does not exist.</p>
                    <p className="text-gray-500">
                         Please check your url and try again or return to the
                         home screen.
                    </p>
               </div>
          </Layout>
     );
};

export default Custom404;
