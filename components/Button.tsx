import { ButtonProps } from "@/types";

const Button = ({containerStyles, textStyles, title, btnIcon, handleClick}: ButtonProps) => {
  return (
    <button className={`button ${containerStyles}`} onClick={handleClick}>
        <span className={`relative z-10 ${textStyles}`}>
          {title}{btnIcon}
        </span>
    </button>
  )
}

export default Button;