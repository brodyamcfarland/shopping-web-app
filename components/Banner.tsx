import Image from "next/image";

const Banner = () => {
     return (
          <div className="hidden md:inline-block">
               <div className="border-b shadow-lg border-gray-600">
                    <Image
                         src="/GET_LONG_BANNER.png"
                         height={100}
                         width={300}
                         alt="Logo"
                         title="Home"
                         className="object-contain w-full"
                         unoptimized
                    />
               </div>
          </div>
     );
};

export default Banner;
