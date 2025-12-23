"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import { ClientProps } from "@types";
import { slideIn } from "@utils/motion";

const ClientCard = ({id, i, name, username, comment, image}: ClientProps) => {
  return (
    <motion.div 
      id={id}
      variants={slideIn("left", "spring", 0.5 + (i * 0.15), 0.8)}
      className={`glassmorphism-3 p-3 xs:p-4 flex flex-col justify-between gap-5
          w-[240px] xs:w-[345px] md:w-[375px] h-auto
          ${id === "client-2" ? "self-center md:self-auto" 
          : id === "client-3" && "self-end md:self-auto"}`}
    >
      <p className="font-bold text-sm" aria-label="3 out of 5 stars">
        <span className="text-[#F7B603]">★★★</span>★★
      </p>

      <p className="p text-[0.675rem] leading-[0.975rem] sm:text-xs lg:!text-sm">
        &rdquo;{comment}&ldquo;
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={`${name} profile picture`}
          width={45}
          height={45}
          sizes="(min-width: 1024px) 45px, 38px"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          className="w-[35px] xs:w-[38px] lg:w-[45px] aspect-square object-cover rounded-full bg-purple/20"
        />

        <div>
          <p className="p text-[0.675rem] leading-[0.975rem]
            sm:text-xs lg:!text-sm"
          >
            {name}
          </p>
          <p className="p text-[0.675rem] leading-[0.975rem] 
            sm:text-xs lg:!text-sm text-purple-2"
          >
            {username}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ClientCard;