"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@components";

import { socials } from "@constants";
import { footerVariants } from "@utils/motion";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding !pb-5 sm:!pb-7 relative z-10 overflow-hidden"
    >
      <div className="gradient-4 z-0" />

      <div
        className="flex flex-wrap items-center justify-center xs:justify-between gap-5"
        role="contentinfo"
      >
        <h2
          className="h2 text-[1.25rem] leading-[1.85rem] 
            lg:text-[1.5rem] lg:leading-[2rem] 
            xl:text-[1.75rem] xl:leading-[2.25rem]"
        >
          Enter Our Reality
        </h2>

        <Button
          containerStyles="px-4 py-2"
          textStyles="flex flex-row-reverse items-center gap-2 text-sm lg:text-base"
          title="ENTER REALITY"
          btnIcon="/icons/vr-headset.svg"
          iconStyles="w-[17px] h-[17px] lg:w-[21px] lg:h-[21px] object-contain"
          handleClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <div className="border-t border-white-1 my-9" />

      <div
        className="flex flex-wrap items-center justify-center 
          xs:justify-between gap-5 gap-y-7 md:gap-y-0"
      >
        <a
          href="/"
          className="flex md:flex-[0.25] font-great-primer tracking-widest text-xl md:text-2xl hover:text-purple-1 transition-colors duration-300"
          aria-label="Go to homepage"
        >
          LIGHT
        </a>

        <p
          className="p md:flex md:flex-1 md:justify-center
            !text-[12px] md:!text-[13px] lg:!text-[14px]"
        >
          Copyright © 2024 Virtual Reality. All rights reserved.
        </p>

        <div className="flex gap-4 lg:gap-7">
          {socials.map((item) => (
            <a
              key={item.name}
              href={`https://${item.name}.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${item.name} page`}
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                loading="lazy"
                src={item.url}
                alt=""
                width={24}
                height={24}
                sizes="(min-width: 640px) 24px, 20px"
                className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
