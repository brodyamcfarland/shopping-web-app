import Image from "next/image";

const Banner = () => {
     return (
          <div className="hidden md:inline-block border-gray-600">
               <div className="border-b shadow-lg border-gray-600">
                    <Image
                         src="/SAMPLEBANNER.png"
                         height={100}
                         width={300}
                         alt="Logo"
                         title="Home"
                         className="w-full max-h-[6.5rem] rotate-180 object-cover"
                    />
               </div>
          </div>
     );
};

export default Banner;
