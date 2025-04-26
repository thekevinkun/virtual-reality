"use client"

import { motion } from "framer-motion";

import { ClientCard, CustomTexts } from "@components";

import { clients } from "@constants";
import { staggerContainer, fadeIn, textVariant } from "@utils/motion";

const Clients = () => {
  return (
    <section id="clients" className="padding md:!pb-32 relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.15}}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.75, 1)}
          className="glassmorphism-2 relative w-full 
            md:min-h-[50vh] lg:min-h-[58vh] 
            pt-10 pb-5 px-4 sm:px-7 md:px-0 md:py-12 lg:py-14"
        >
          <CustomTexts 
            title="What our clients say"
            textStyles="text-center text-[1.15rem] leading-[1.35rem] 
              xs:text-[1.35rem] xs:leading-[2rem] sm:text-[1.75rem] 
              sm:leading-[2.25rem] lg:text-[2.5rem] lg:leading-[3rem]"
          />

          <motion.p
            variants={textVariant(1)}
            className="p text-center mt-5 mx-auto md:max-w-[580px] lg:max-w-[640px]
              !text-xs xs:!text-sm md:!text-base lg:!text-lg"
          >
            See what our customer say about us. It really matter for us. How good or bad
            we will make ir for evaluation to make EhyalLive better.
          </motion.p>

          <div className="mt-7 md:mt-0 relative md:absolute 
              md:bottom-[-20%] lg:bottom-[-18%] gap-5
              w-full flex flex-col md:flex-row justify-center"
          >
            {clients.map((item, index) => (
              <ClientCard 
                key={item.id}
                id={item.id}
                i={index}
                name={item.name}
                username={item.username}
                comment={item.comment}
                image={item.img}
              /> 
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Clients;