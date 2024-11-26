"use client"

import { motion } from "framer-motion";

import { Button, TypingText } from "@/components";

import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const VRGAme = () => {
  return (
    <section id="game" className="padding relative z-10 mt-[14.15rem] xs:mt-[13.5rem] sm:mt-[15rem] md:mt-[18.5rem] lg:mt-[11.5rem] xl:mt-[14.25rem]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 xl:gap-28"
      >
        <div className="flex flex-row gap-5">
          <motion.div 
            variants={slideIn("up", "tween", 0.5, 1)}
            className="relative lg:bottom-[120px] p-2 w-full lg:w-[245px] xl:w-[310px] h-auto border border-white-1"
          >
            <img 
              src="/images/experience-1.png" 
              alt="Game experience 1" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            variants={slideIn("up", "tween", 0.75, 1)}
            className="p-2 w-full lg:w-[245px] xl:w-[310px] h-auto border border-white-1"
          >
            <img 
              src="/images/experience-2.png" 
              alt="Game experience 2" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <TypingText 
            title="New Experience in Playing Game"
            textStyles="text-center lg:text-start text-[1.15rem] leading-[1.35rem] xs:text-[1.35rem] xs:leading-[2rem] sm:text-[1.5rem] sm:leading-[2.5rem] lg:text-[1.85rem] lg:leading-[2.85rem] xl:text-[2.45rem] xl:leading-[3.5rem]"
          />

          <motion.div variants={fadeIn("up", "tween", 0.75, 1)} className="text-center lg:text-start">
            <p className="p mt-5 lg:pr-8 xl:pr-16">
              You can try playing the game with a
              new style and of course a more real
              feel, like you are the main character
              in your game and adventure in this
              new digital world.
            </p>
            
            <Button 
              containerStyles="mt-8 px-7 py-3"
              title="Get it now"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default VRGAme;