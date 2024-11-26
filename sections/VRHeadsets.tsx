"use client"

import { motion } from "framer-motion";

import { TypingText } from "@/components";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { realityHeadsets } from "@/constants";

const VRHeadsets = () => {
  return (
    <section id="headsets" className="padding relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
      >
        <TypingText 
          title="Mixed Reality Headsets"
          textStyles="text-center lg:text-start text-[1.15rem] leading-[1.35rem] xs:text-[1.35rem] xs:leading-[2rem] sm:text-[1.5rem] sm:leading-[2.5rem] lg:text-[1.85rem] lg:leading-[2.45rem] xl:text-[2.25rem] xl:leading-[2.75rem]"
        />

        <div className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {realityHeadsets.map((item, index) => (
            <motion.div 
              variants={fadeIn("up", "tween", 0.5 * ((index + 1) / 2), 1)}
              key={item.id}
              id={item.id} 
              className="relative w-full h-full"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-2xl"/>

              <div 
                className={`glassmorphism-1 px-5 py-3 sm:px-7 md:px-5 md:py-3 lg:px-7 lg:py-4
                    rounded-bl-xl absolute bottom-0 
                    ${item.id === "headset-1" ? "left-[1px]" : item.id === "headset-2" ? "left-[2px]" : "left-[0px]"}
                    w-[235px] h-[110px] xs:w-[260px] xs:h-[125px] sm:w-[320px] sm:h-[150px] 
                    md:w-[235px] md:h-[115px] lg:w-[320px] lg:h-[158px]`}
              >
                <div className="h-full flex flex-col justify-between">
                  <h3 className="font-orbitron font-medium underline 
                    text-[1rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] 
                    md:text-[1.15rem] md:leading-[1.65rem] lg:text-[1.5rem] lg:leading-[2rem]"
                  >
                    {item.title}
                  </h3>
                  <p className="p mt-auto text-xs xs:!text-sm sm:!text-base md:!text-[0.765rem] md:!leading-[1rem] lg:!text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div> 
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default VRHeadsets;