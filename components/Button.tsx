import Image from "next/image";
import { ButtonProps } from "@types";

const Button = ({containerStyles, textStyles, title, btnIcon, iconStyles, handleClick}: ButtonProps) => {
  return (
    <button 
      className={`button relative inline-flex items-center justify-center text-center ${containerStyles}`} 
      onClick={handleClick}
    >
      <span className={`relative z-10 ${textStyles}`}>
        {title}{btnIcon && 
          (<span>
            <Image 
            src={btnIcon} 
            alt="button icon"
            width={0}
            height={0}
            sizes="100vw" 
            className={iconStyles ? iconStyles : "w-full h-full"}/>
          </span>)}
      </span>
    </button>
  )
}

export default Button;