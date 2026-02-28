// "use client";

// import { motion } from "framer-motion";
// import RatingBadge from "@/components/common/RatingBadge";

// export default function BusinessHero() {
//   return (
//     <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-2 overflow-hidden bg-gradient-to-l from-[#9CD1FF] to-white ">
//       <div className="container mx-auto sm:px-0 px-4 max-w-7xl">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Text Content */}
//           <div className="lg:w-1/2 z-10">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
//             >
//               Park Smarter. Move Faster.{" "}
//               <span className="text-blue-600">Earn Better.</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg text-[#636363] mb-8 max-w-lg leading-relaxed"
//             >
//               In today's fast-moving world, time is everything. Searching for
//               parking shouldn't slow you down. With HalaPark, drivers, property
//               owners, and businesses connect through one powerful smart
//               platform.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex flex-col sm:flex-row items-center gap-6"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-[#0088FF] text-white rounded-full font-medium text-base hover:bg-blue-700 transition-colors"
//               >
//                 Let's Connect
//               </motion.button>

//               <RatingBadge
//                 rating="4.9"
//                 totalReviews="4268"
//                 textColor="transparent"
//                 shadow="none"
//                 border="true"
//               />
//             </motion.div>
//           </div>

//           {/* Visual Content (Phone Mockup) */}
//           <div className="lg:w-1/2 relative">
//             <img src="/downlo8as7dguba9uho.png" alt="" className="pl-15" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import RatingBadge from "@/components/common/RatingBadge";

export default function BusinessHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-2 overflow-hidden bg-gradient-to-l from-[#9CD1FF] to-white max-md:pt-24 max-md:pb-16 max-sm:pt-20 max-sm:pb-14">
      <div className="container mx-auto sm:px-0 px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-md:gap-10 max-sm:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 z-10 max-lg:text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                text-5xl 
                lg:text-6xl 
                max-md:text-4xl 
                max-sm:text-3xl 
                font-bold 
                text-slate-900 
                leading-[1.1] 
                mb-6
              "
            >
              Park Smarter. Move Faster.{" "}
              <span className="text-blue-600">Earn Better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                text-lg 
                max-md:text-base 
                max-sm:text-sm 
                text-[#636363] 
                mb-8 
                max-md:mb-6 
                max-w-lg 
                leading-relaxed 
                max-lg:mx-auto
              "
            >
              In today's fast-moving world, time is everything. Searching for
              parking shouldn't slow you down. With HalaPark, drivers, property
              owners, and businesses connect through one powerful smart
              platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                flex 
                flex-col 
                sm:flex-row 
                items-center 
                gap-6 
                max-sm:gap-4
                max-lg:justify-center
              "
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 
                  py-3 
                  max-sm:px-6 
                  bg-[#0088FF] 
                  text-white 
                  rounded-full 
                  font-medium 
                  text-base 
                  max-sm:text-sm 
                  hover:bg-blue-700 
                  transition-colors
                "
              >
                Let's Connect
              </motion.button>

              <RatingBadge
                rating="4.9"
                totalReviews="4268"
                textColor="transparent"
                shadow="none"
                border="true"
              />
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative flex justify-center max-lg:mt-4">
            <img
              src="/downlo8as7dguba9uho.png"
              alt=""
              className="
                pl-15 
                max-lg:pl-0 
                max-md:w-[85%] 
                max-sm:w-full 
                h-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
