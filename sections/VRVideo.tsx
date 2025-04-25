"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import { CustomTexts } from "@components";

import { slideIn, staggerContainer } from "@utils/motion";

const VRVideo = () => {
  return (
    <section id="video" className="yPaddings">
      <motion.div
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)} 
          className="px-7 py-5 sm:px-10 sm:py-7 w-[85%] md:w-[90%] h-full 
          bg-dark-blue grid items-center gap-7 md:gap-14 lg:gap-20
            grid-cols-1 md:grid-cols-[1fr,200px]
            lg:grid-cols-[1fr,280px] xl:grid-cols-[1fr,340px] 
            border-t border-r border-white-1 rounded-tr-3xl"
        >
          <CustomTexts 
            title={`Awesome experiences with virtual reality world`}
            textStyles="!font-light text-[1.1rem] leading-[2.1rem] 
              xs:text-[1.5rem] xs:leading-[2.5rem] md:text-[1.5rem] 
              md:leading-[2.5rem] lg:text-[2rem] lg:leading-[3rem] 
              xl:text-[2.65rem] xl:leading-[4rem]"
          />

          <div 
            className="relative md:pr-5 
              lg:pr-10 w-[65%] md:w-full h-auto"
          >
            <Image 
              src="/images/experience-video.png" 
              alt="VR World Experience video poster"
              width={0}
              height={0}
              sizes="(min-width: 768px) 100vw, 65vw"
              className="w-full h-full object-cover"
            />
            
            <div className="p-4 bg-black/80 hover:bg-black/100 
              rounded-full cursor-pointer transitions-[background-color] 
              duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] 
              md:translate-x-[-65%] lg:translate-x-[-75%] translate-y-[-50%]"
            >
              <Image 
                src="/icons/play.svg"
                alt="Play icon"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[27px] h-[27px] xs:w-[30px] xs:h-[30px] 
                md:w-[24px] md:h-[24px] lg:w-[32px] lg:h-[32px] object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VRVideo;