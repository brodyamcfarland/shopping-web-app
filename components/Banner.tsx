import Image from "next/image";

const Banner = () => {
     return (
          <div className="hidden md:inline-block">
               <div className="border-b shadow-lg border-gray-600 flex items-center justify-center">
                    <Image
                         src="/GET_LONG_BANNER.png"
                         height={1000}
                         width={4000}
                         alt="Logo"
                         title="Home"
                         className="object-contain w-auto h-auto"
                         unoptimized
                         priority
                    />
               </div>
          </div>
     );
};

export default Banner;
