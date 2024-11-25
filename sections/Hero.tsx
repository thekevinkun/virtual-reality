"use client"

import { motion } from "framer-motion";

import { fadeIn, slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";

import { Button, TypingText } from "@/components";

import { peopleOnline } from "@/constants";

const Hero = () => {
  return (
    <section id="home" className="padding">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
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
              containerStyles="px-5 py-3 bg-none hover:bg-none hover:bg-purple-1/10 transition-[background-color] duration-300"
              title="Explore Device"
            />
          </motion.div>

          <motion.div
            variants={slideIn("left", "tween", 1, 1)}  
            className="mt-8 lg:mt-10 flex items-center gap-4"
          >
            <div className="flex items-center">
              {peopleOnline.people.map((person, index) => (
                <img key={index} src={person} alt="Person Online" className="w-8 h-8 object-contain"/>
              ))}
            </div>

            <img src="/icons/ellipse-small.svg" alt="Small Ellipse" className="w-3 h-3 object-contain"/>
            <p className="font-semibold text-sm sm:text-base">{peopleOnline.total} people online</p>
          </motion.div>
        </div>

        <div className="mt-7 md:mt-5 lg:mt-0 w-full relative flexCenter flex-col">
          <motion.img 
            variants={fadeIn("up", "tween", 0.75, 1)} 
            src="/images/hero-sparkle.png" 
            alt="Sparkle" 
            className="absolute top-0 right-0 w-[57px] h-[57px] xs:w-[65px] xs:h-[65px] md:w-[72px] md:h-[72px] object-contain"
          />

          <motion.div 
            variants={fadeIn("up", "tween", 0.75, 1)} 
            className="relative mt-12 lg:mt-0 xl:mt-7"
          >
            <img 
              src="/images/hero.png" 
              alt="Hero" 
              className="relative w-[350px] xs:w-[435px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[500px] h-full object-contain z-10"
            />
            
            <div className="w-[325px] h-[380px] xs:w-[405px] xs:h-[400px] sm:w-[465px] sm:h-[465px] md:w-[555px] md:h-[560px] lg:w-[370px] lg:h-[420px] xl:w-[465px] xl:h-[465px]
                z-[5] absolute left-[16px] xs:left-[19px] sm:left-[22px] md:left-[28px] lg:left-[18px] xl:left-[22px] top-[45%] bg-dark-blue rounded-tr-[4200px] rounded-b-full">
              <div className="px-3 h-full flexCenter flex-col">
                <TypingText 
                  title="Cinematic Virtual Reality"
                  textStyles="mt-24 md:mt-28"
                />

                <div className="mt-5 sm:mt-7 w-[170px] sm:w-[240px] border border-white-1" />

                <motion.p 
                  variants={textVariant(1.2)} 
                  className="p mt-10 lg:mt-8 px-10 lg:px-8 xl:px-14 text-center"
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