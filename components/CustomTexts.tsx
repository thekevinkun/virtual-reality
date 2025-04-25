import { motion } from "framer-motion";

import { CustomTextProps } from "@types";

import { textContainer, textVariant2 } from "@utils/motion";

const CustomTexts = ({title, textStyles}: CustomTextProps) => {
  return (
    <motion.h2
        variants={textContainer}
        className={`h2 ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span className="inline-block" variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.h2>
  )
}

export default CustomTexts;
