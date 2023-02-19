import React from "react";
import Layout from "../components/Layout";
import { Head } from "next/document";
import Image from "next/image";

const Custom404 = () => {
     return (
          <Layout>
               <div className="flex flex-col flex-1 items-center justify-center px-2 gap-5">
                    <h1 className="text-2xl">404 Error</h1>
                    <p className="text-gray-500">
                         This route does not exist or an error has occured.
                    </p>
                    <p className="text-gray-500">
                         Please check your url and try again or return to the
                         home screen.
                    </p>
                    <Image
                         src="/SAMPLE_SQUARE.png"
                         height={300}
                         width={300}
                         alt="Logo"
                         className="border-[2px] h-52 w-52 border-gray-600 rounded-full object-cover hover:cursor-pointer"
                    />
               </div>
          </Layout>
     );
};

export default Custom404;
