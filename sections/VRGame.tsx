"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button, CustomTexts } from "@components";

import { fadeIn, slideIn, staggerContainer } from "@utils/motion";

const VRGAme = () => {
  return (
    <section
      id="features"
      className="padding relative z-10 
      mt-[14.15rem] xs:mt-[13.5rem] sm:mt-[15rem] md:mt-[18rem] lg:mt-[11.5rem] xl:mt-[16rem]"
    >
      <motion.div
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 xl:gap-32"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.3, 0.8)}
          className="flex flex-row order-2 lg:order-none gap-5"
        >
          <div
            className="relative lg:bottom-[120px] p-2
              w-[165px] xs:w-[195px] sm:w-[245px] 
              md:w-[265px] lg:w-[245px] xl:w-[285px] 
              aspect-[2/3] border border-white-1"
          >
            <Image
              loading="lazy"
              src="/images/experience-1.png"
              alt="Person playing VR game in action"
              width={285}
              height={428}
              sizes="(min-width: 640px) 245px, 165px"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="relative p-2 w-[165px] xs:w-[195px]
              sm:w-[245px] md:w-[265px] lg:w-[245px] 
              xl:w-[285px] aspect-[2/3] border border-white-1"
          >
            <Image
              loading="lazy"
              src="/images/experience-2.png"
              alt="VR gaming immersive experience"
              width={285}
              height={428}
              sizes="(min-width: 640px) 245px, 165px"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div
          className="flex flex-col 
          items-center lg:items-start order-1 lg:order-none"
        >
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
            variants={fadeIn("up", "tween", 0.4, 0.8)}
            className="text-center lg:text-start"
          >
            <p className="p mt-5 lg:pr-8 xl:pr-16">
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </p>

            <Button
              containerStyles="!hidden lg:!inline-block mt-8 px-7 py-3"
              title="Get it now"
            />
          </motion.div>
        </div>

        <div className="flex lg:!hidden order-3 mt-2">
          <motion.div variants={fadeIn("up", "tween", 0.5, 0.8)}>
            <Button containerStyles="px-7 py-3" title="Get it now" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VRGAme;
