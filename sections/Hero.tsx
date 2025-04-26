"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import { Button, CustomTexts } from "@components";

import { peopleOnline } from "@constants";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@utils/motion";

const Hero = () => {
  return (
    <section id="home" className="padding relative z-10">
      <motion.div 
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.10}}
        className="relative flex flex-col lg:flex-row lg:gap-5 xl:gap-8"
      >
        <div>
          <motion.h1 
           variants={textVariant(1.1)}
           className="h1"
          >
            Let’s Explore Three-Dimensional visual
          </motion.h1>

          <motion.p 
            variants={textVariant(1.2)}
            className="p mt-5"
          >
            With virtual technology you can see the digital 
            world feel more real and you can play the game with a new style.
          </motion.p>

          <motion.div
            variants={slideIn("left", "tween", 1, 1)} 
            className="mt-8 flex items-center gap-3"
          >
            <Button 
              containerStyles="px-7 py-3"
              title="Get it Now"
            />

            <Button 
              containerStyles="px-5 py-3 bg-none hover:bg-none hover:bg-purple-1/10
                transition-[background-color] duration-300"
              title="Explore Device"
            />
          </motion.div>

          <motion.div
            variants={slideIn("left", "tween", 1, 1)}  
            className="mt-8 lg:mt-10 flex items-center gap-4"
          >
            <div className="flex items-center">
              {peopleOnline.people.map((person, index) => (
                <Image 
                  key={index} 
                  loading="lazy"
                  src={person} 
                  alt="Person Online" 
                  width={0}
                  height={0}
                  sizes="32px"
                  className="w-8 aspect-square object-contain rounded-full"/>
              ))}
            </div>

            <Image 
              loading="lazy"
              src="/icons/ellipse-small.svg" 
              alt="Small Ellipse" 
              width={0}
              height={0}
              sizes="12px"
              className="w-3 h-3 object-contain"
            />
            <p className="font-semibold text-sm sm:text-base">{peopleOnline.total} people online</p>
          </motion.div>
        </div>

        <div className="mt-7 md:mt-5 lg:mt-0 w-full relative flexCenter flex-col">
          <motion.img 
            variants={fadeIn("up", "tween", 0.75, 1)} 
            src="/images/hero-sparkle.png" 
            alt="Sparkle" 
            className="absolute top-0 right-0 sm:right-[5%] md:right-[15%] lg:right-0 
            w-[57px] h-[57px] xs:w-[65px] xs:h-[65px] md:w-[72px] md:h-[72px] object-contain"
          />

          <motion.div 
            variants={fadeIn("up", "tween", 0.75, 1)} 
            className="relative md:mt-10 lg:mt-0 xl:mt-7 mt-12"
          >
            <Image 
              loading="lazy"
              src="/images/hero.png" 
              alt="Hero" 
              width={0}
              height={0}
              sizes="(min-width: 1280px) 500px,
                (min-width: 1024px) 410px,
                (min-width: 768px) 495px,
                (min-width: 640px) 438px,
                (min-width: 480px) 409px,
                352px"
              className="relative w-[352px] xs:w-[409px] sm:w-[438px] md:w-[495px]
                lg:w-[410px] xl:w-[500px] h-full object-contain z-10"
            />
            
            <div 
              className="w-[325px] h-[380px] xs:w-[380px] xs:h-[420px]
                sm:w-[405px] sm:h-[450px] md:w-[453px] md:h-[495px] 
                lg:w-[380px] lg:h-[420px] xl:w-[465px] xl:h-[465px]
                z-[5] absolute left-[16px] xs:left-[19px] 
                sm:left-[22px] md:left-[28px] lg:left-[18px] 
                xl:left-[22px] top-[45%] 
                bg-dark-blue rounded-tr-[4200px] rounded-b-full"
            >
              <div className="px-3 h-full flexCenter flex-col">
                <CustomTexts 
                  title="Cinematic Virtual Reality"
                  textStyles="mt-28 text-[1.15rem] leading-[1.35rem]
                    xs:text-[1.35rem] xs:leading-[1.75rem] sm:text-[1.5rem]
                    sm:leading-[2rem] xl:text-[1.65rem] xl:leading-[2.15rem]"
                />

                <div className="mt-7 w-[150px] xs:w-[170px] sm:w-[240px] border border-white-1" />

                <motion.p 
                  variants={textVariant(1.2)} 
                  className="p mt-8 px-14 lg:px-8 xl:px-14 text-center"
                >
                  Let’s be the best for more real and effective results and ready
                  to explore the limitless world that we have prepared for you.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;