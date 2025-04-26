"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import { companyValues } from "@constants";
import { fadeIn, staggerContainer, textVariant } from "@utils/motion";

const CompanyValues = () => {
  return (
    <section id="company" className="padding relative z-10">
      <div className="gradient-3 z-0"/>

      <motion.div 
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="flex flex-col lg:flex-row items-center lg:gap-20 xl:gap-48 overflow-hidden"
      >
        <div>
          <motion.h2
            variants={textVariant(1.1)} 
            className="h2 gap-3 text-center lg:text-start text-[1.15rem] leading-[1.35rem] 
              xs:text-[1.35rem] xs:leading-[2rem] sm:text-[2rem] sm:leading-[2.75rem] 
              lg:text-[2.25rem] lg:leading-[3rem] xl:text-[2.65rem] xl:leading-[3.5rem]"
          >
            Our company values <br className="hidden lg:block"/>culture
            <span className="inline-block">
              <Image 
                loading="lazy"
                src="/icons/love.svg" 
                alt="Love icon"
                width={0}
                height={0}
                sizes="(min-width: 1280px) 30px,
                      (min-width: 768px) 26px,
                      (min-width: 640px) 23px, 16px"
                className="ml-2 sm:ml-3 w-[16px] h-[16px] sm:w-[23px] sm:h-[23px] 
                  md:w-[26px] md:h-[26px] xl:w-[30px] xl:h-[30px] object-contain"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={textVariant(1.2)}
            className="p mt-5 mx-auto text-center lg:text-start 
              xs:max-w-[345px] sm:max-w-[480px] lg:max-w-[560px] 
              text-sm sm:!text-base md:text-lg xl:!text-xl"
          >
            We specialize in creating visual identities for products and brand in your company.
          </motion.p>
        </div>

        <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-y-10 
            xs:gap-y-12 lg:gap-y-10 gap-x-8 xs:gap-x-14 xl:gap-x-16">
          {companyValues.map((item, index) => (
            <motion.div
              variants={fadeIn("left", "tween", 0.5 * ((index + 1) / 2), 1)}
              key={item.id}
              id={item.id}
              className="flex flex-col items-center gap-2"
            >
              <Image 
                loading="lazy"
                src={item.img} 
                alt={item.title}
                width={0}
                height={0}
                sizes="(min-width: 1280px) 58px,
                      (min-width: 1024px) 54px,
                      (min-width: 768px) 58px,
                      (min-width: 480px) 50px, 46px"
                className="w-[46px] h-[46px] xs:w-[50px] xs:h-[50px] 
                  md:w-[58px] md:h-[58px] lg:w-[54px] lg:h-[54px] 
                  xl:w-[58px] xl:h-[58px] object-contain" 
              />
              <p className="p text-center !font-medium 
                !text-sm md:!text-base lg:!text-sm xl:!text-base"
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default CompanyValues;