"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@components";

import { fadeIn, slideIn, staggerContainer, textVariant } from "@utils/motion";

const ExploreProducts = () => {
  return (
    <section id="explore" className="padding relative z-10">
      <motion.div
        variants={staggerContainer(0.25, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="overflow-hidden">
          <motion.div
            variants={slideIn("left", "spring", 0.3, 0.8)}
            className="glassmorphism-2 relative lg:grid 
              lg:grid-cols-2 lg:gap-14 xl:gap-10"
          >
            <div
              className="relative z-10 px-5 py-16 
                sm:py-20 lg:px-10 lg:py-14
                flex flex-col items-center lg:items-start"
            >
              <motion.h2
                variants={textVariant(0.4)}
                className="h2 gap-3 lg:block text-center lg:text-start text-[1.115rem] leading-[1.35rem] 
                  xs:text-[1.35rem] xs:leading-[2rem] sm:text-[1.5rem] sm:leading-[2.5rem] 
                  lg:text-[2.25rem] lg:leading-[3rem] xl:text-[2.65rem] xl:leading-[3.5rem]"
              >
                Explore product in <br className="hidden lg:block" />
                new way
                <span className="ml-1 xs:ml-2 lg:ml-3 inline-block">
                  <Image
                    loading="lazy"
                    src="/icons/angle-right.svg"
                    alt=""
                    width={30}
                    height={30}
                    sizes="(min-width: 1280px) 30px,
                      (min-width: 640px) 24px, 16px"
                    className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]
                      xl:w-[30px] xl:h-[30px] object-contain"
                  />
                </span>
              </motion.h2>

              <motion.p
                variants={textVariant(0.5)}
                className="p mt-5 text-center lg:text-start 
                max-w-[460px] lg:max-w-[430px] xl:max-w-[500px] 
                text-sm sm:!text-base md:text-lg xl:!text-xl"
              >
                We specialize in creating visual identities for products and
                brand in your company.
              </motion.p>

              <motion.div
                variants={fadeIn("up", "tween", 0.6, 0.8)}
                className="mt-7 xs:mt-10 lg:mt-7 w-full sm:w-auto
                  flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email address"
                  required
                  className="glassmorphism-3 w-[80%] xs:w-[70%] sm:w-auto 
                  px-3 py-[10px] sm:pr-16 lg:pr-8 xl:pr-14 !rounded-md
                text-white-1 font-light text-xs xs:text-sm sm:text-base"
                />

                <Button
                  containerStyles="px-6 xs:px-7 py-[10px] sm:py-2"
                  textStyles="flex items-center xs:gap-1
                    !text-xs xs:!text-sm sm:!text-lg"
                  title="Start"
                  btnIcon="/icons/arrow-right.svg"
                  iconStyles="w-[10px] h-[10px] xs:w-[12px] xs:h-[12px] 
                    sm:w-[14px] sm:h-[14px] object-contain"
                />
              </motion.div>
            </div>

            <Image
              src="/images/explore-product.png"
              alt=""
              width={640}
              height={800}
              sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              className="absolute lg:relative top-0 left-0 z-[5] w-full h-full object-cover opacity-45 lg:opacity-70"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreProducts;
