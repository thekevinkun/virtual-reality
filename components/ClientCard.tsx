"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import { ClientProps } from "@types";
import { slideIn } from "@utils/motion";

const ClientCard = ({id, i, name, username, comment, image}: ClientProps) => {
  return (
    <motion.div 
      id={id}
      variants={slideIn("left", "spring", 1.2 * ((i + 1) / 2), 1)}
      className={`glassmorphism-3 p-3 xs:p-4 flex flex-col justify-between gap-5
          w-[240px] xs:w-[345px] md:w-[375px] h-auto
          ${id === "client-2" ? "self-center md:self-auto" 
          : id === "client-3" && "self-end md:self-auto"}`}
    >
      <p className="font-bold text-sm">
        <span className="text-[#F7B603]">starstar</span>star
      </p>

      <p className="p text-[0.675rem] leading-[0.975rem] sm:text-xs lg:!text-sm">
        &rdquo;{comment}&ldquo;
      </p>

      <div className="flex items-center gap-3">
        <Image 
          src={image} 
          alt="Clients avatar"
          width={0}
          height={0}
          sizes="100vw" 
          className="w-[35px] h-[35px] xs:w-[38px] 
            xs:h-[38px] lg:w-[45px] lg:h-[45px] object-contain"
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