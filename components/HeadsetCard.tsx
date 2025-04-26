"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import { HeadsetProps } from "@types";

import { fadeIn } from "@utils/motion";

const HeadsetCard = ({id, i, title, description, image}: HeadsetProps) => {
  return (
    <motion.div 
      variants={fadeIn("up", "tween", 0.5 * ((i + 1) / 2), 1)}
      key={id}
      id={id} 
      className="relative w-full h-full"
    >
      <Image 
        loading="lazy"
        src={image} 
        alt={title}
        width={0}
        height={0}
        sizes="(min-width: 768px) 50vw, 100vw" 
        className="w-full h-full object-cover rounded-2xl"
      />

      <div 
        className={`glassmorphism-1 ${id === "headset-1" ? "left-[1px]" 
            : id === "headset-2" ? "left-[2px]" : "left-[0px]"}
            absolute bottom-0 px-5 py-3 sm:px-7 
            md:px-5 md:py-3 lg:px-7 lg:py-4 rounded-bl-xl 
            w-[235px] h-[110px] xs:w-[260px] xs:h-[125px] sm:w-[320px] sm:h-[150px] 
            md:w-[235px] md:h-[115px] lg:w-[320px] lg:h-[158px]`}
      >
        <div className="h-full flex flex-col justify-between">
          <h3 className="font-orbitron font-medium underline 
            text-[1rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] 
            md:text-[1.15rem] md:leading-[1.65rem] lg:text-[1.5rem] lg:leading-[2rem]"
          >
            {title}
          </h3>
          
          <p className="p mt-auto text-xs xs:!text-sm 
              sm:!text-base md:!text-[0.765rem] 
              md:!leading-[1rem] lg:!text-base"
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div> 
  )
}

export default HeadsetCard;