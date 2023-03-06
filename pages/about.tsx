import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";

const About = () => {
     return (
          <Layout>
               <Head>
                    <title>Shopping: About</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-white/50 scrollbar-thumb-rounded-lg">
                    <div className="flex flex-col mx-2 md:mx-auto my-4 border border-gray-600 bg-[#171717] max-w-4xl rounded-md">
                         <h2 className="py-2 border-b border-gray-600 font-bold">
                              About
                         </h2>
                         <div className="flex flex-col bg-[#272727] p-3">
                              <p className="text-gray-300 text-sm px-10 py-3">
                                   Get Marketplace is a proof of concept
                                   e-commerce website created by Brody
                                   McFarland. This website does not contain any
                                   real products that can be purchased with real
                                   currency.
                              </p>
                              <div className="flex flex-row border mb-4 border-gray-600 divide-x-[1px] divide-gray-600 text-sm">
                                   <h3 className="flex items-center w-[5rem] ustify-center p-3 bg-[#171717]">
                                        Features
                                   </h3>
                                   <section className="text-left p-3">
                                        <li>
                                             Google and Github Authentication
                                             using NextAuth
                                        </li>
                                        <li>
                                             Cart and Cart Preview Functionality
                                             using Redux
                                        </li>
                                        <li>
                                             Responsive, Animated, and
                                             Collapsable UI using Tailwind CSS
                                             and Framer Motion
                                        </li>
                                        <li>
                                             Search and Filtering Functionality
                                        </li>
                                        <li>Product Discount Logic</li>
                                   </section>
                              </div>
                              <div className="flex flex-row mb-4 border border-gray-600 divide-x-[1px] divide-gray-600 text-sm">
                                   <h3 className="flex items-center w-[5rem] justify-center p-3 bg-[#171717]">
                                        Tools
                                   </h3>
                                   <section className="text-left p-3">
                                        <li>Frontend Framework: NextJS 13</li>
                                        <li>Language: Typescript</li>
                                        <li>CSS: Tailwind CSS</li>
                                        <li>State Management: Redux</li>
                                        <li>Authentication: NextAuth</li>
                                        <li>Animations: Framer Motion</li>
                                        <li>Products: Fakestoreapi.com</li>
                                        <li>Icons: Heroicons & React-icons</li>
                                        <li>Notifications: React Hot Toast</li>
                                        <li>
                                             Order History Storage: Google
                                             Firebase
                                        </li>
                                   </section>
                              </div>
                              <div className="flex gap-5 items-center justify-center">
                                   <Link
                                        href="https://github.com/brodyamcfarland"
                                        target="_blank"
                                        className="opacity-50 hover:opacity-100 duration-300"
                                        title="Github"
                                   >
                                        <AiOutlineGithub size={40} />
                                   </Link>
                                   <Link
                                        href="https://twitter.com/off2eth"
                                        target="_blank"
                                        className="opacity-50 hover:opacity-100 duration-300"
                                        title="Dev Twitter"
                                   >
                                        <RxTwitterLogo size={40} />
                                   </Link>
                                   <Link
                                        href="https://website-v3-orcin.vercel.app/"
                                        target="_blank"
                                        className="opacity-50 hover:opacity-100 duration-300"
                                        title="Dev Website"
                                   >
                                        <BiWorld size={40} />
                                   </Link>
                                   <Link
                                        href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/"
                                        target="_blank"
                                        className="opacity-50 hover:opacity-100 duration-300"
                                        title="LinkedIn"
                                   >
                                        <AiOutlineLinkedin size={40} />
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </Layout>
     );
};

export default About;
