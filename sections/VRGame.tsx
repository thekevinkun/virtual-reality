"use client"

import { motion } from "framer-motion";
import Image from "next/image";

import { Button, CustomTexts } from "@components";

import { fadeIn, slideIn, staggerContainer } from "@utils/motion";

const VRGAme = () => {
  return (
    <section id="game" className="padding relative z-10 
      mt-[14.15rem] xs:mt-[13.5rem] sm:mt-[15rem] md:mt-[18rem] lg:mt-[11.5rem] xl:mt-[16rem]"
    >
      <motion.div 
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 xl:gap-28"
      >
        <motion.div 
          variants={slideIn("left", "tween", 0.5, 1)} 
          className="flex flex-row order-1 lg:order-none gap-5"
        >
          <motion.div 
            variants={slideIn("left", "tween", 0.5, 1)}
            className="relative lg:bottom-[120px] p-2
              w-[165px] xs:w-[195px] sm:w-[245px] 
              md:w-[265px] lg:w-[245px] xl:w-[285px] 
              aspect-[2/3] border border-white-1"
          >
            <Image 
              src="/images/experience-1.png" 
              alt="Game experience 1"
              fill
              sizes="(min-width: 1280px) 285px, 
                (min-width: 1024px) 245px, 
                (min-width: 768px) 225px, 
                (min-width: 640px) 245px,
                (min-width: 480px) 195px, 165px"
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            variants={slideIn("left", "tween", 0.75, 1)}
            className="relative p-2 w-[165px] xs:w-[195px]
              sm:w-[245px] md:w-[265px] lg:w-[245px] 
              xl:w-[285px] aspect-[2/3] border border-white-1"
          >
            <Image 
              src="/images/experience-2.png" 
              alt="Game experience 2"
              fill
              sizes="(min-width: 1280px) 285px, 
                (min-width: 1024px) 245px, 
                (min-width: 768px) 225px, 
                (min-width: 640px) 245px, 
                (min-width: 480px) 195px, 165px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start">
          <CustomTexts 
            title="New Experience in Playing Game"
            textStyles="text-center lg:text-start 
            text-[1.15rem] leading-[1.35rem] 
            xs:text-[1.35rem] xs:leading-[2rem] 
            sm:text-[1.5rem] sm:leading-[2.5rem] 
            g:text-[1.85rem] lg:leading-[2.85rem] 
            xl:text-[2.65rem] xl:leading-[3.5rem]"
          />

          <motion.div 
            variants={fadeIn("up", "tween", 0.75, 1)} 
            className="text-center lg:text-start"
          >
            <p className="p mt-5 lg:pr-8 xl:pr-16">
              You can try playing the game with a
              new style and of course a more real
              feel, like you are the main character
              in your game and adventure in this
              new digital world.
            </p>
            
            <Button 
              containerStyles="!hidden lg:!inline-block mt-8 px-7 py-3"
              title="Get it now"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={slideIn("up", "tween", 0.75, 1)}
          className="flex order-2 mt-2"
        >
          <Button 
            containerStyles="lg:!hidden px-7 py-3"
            title="Get it now"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VRGAme;