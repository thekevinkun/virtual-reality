"use client"

import { motion } from "framer-motion";

import { HeadsetCard, TypingText } from "@/components";

import { staggerContainer } from "@/utils/motion";
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
            <HeadsetCard
              key={item.id} 
              id={item.id}
              i={index}
              title={item.title}
              description={item.description}
              image={item.img}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default VRHeadsets;