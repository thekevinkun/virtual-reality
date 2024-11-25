import { motion } from "framer-motion";

import { CustomTextProps } from "@/types";

import { textContainer, textVariant2 } from "@/utils/motion";

const TypingText = ({title, textStyles}: CustomTextProps) => {
  return (
    <motion.h2
        variants={textContainer}
        className={`h2 ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.h2>
  )
}

export default TypingText;
