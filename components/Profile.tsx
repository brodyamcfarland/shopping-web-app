import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Profile = () => {
     const router = useRouter();
     const { data: session } = useSession();
     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="flex h-20 gap-2 p-2 items-center hover:cursor-pointer border-t border-gray-600 hover:bg-white/5 hover:underline"
               title="Settings"
               onClick={() => router.push("/settings")}
          >
               <Image
                    src={`${session?.user?.image}`}
                    height={100}
                    width={100}
                    alt="Logo"
                    className="h-12 w-12 object-contain rounded-full"
               />
               <div className="flex flex-col opacity-80 hover:opacity-100 w-[11.45rem]">
                    <span className="text-white text-left font-semibold text-sm">
                         {session?.user?.name}
                    </span>
                    <p className="text-gray-400 text-xs text-left truncate">
                         {session?.user?.email}
                    </p>
               </div>
          </motion.div>
     );
};

export default Profile;
