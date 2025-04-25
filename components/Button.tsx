import { ButtonProps } from "@types";

const Button = ({containerStyles, textStyles, title, btnIcon, iconStyles, handleClick}: ButtonProps) => {
  return (
    <button 
      className={`button relative inline-flex items-center justify-center text-center ${containerStyles}`} 
      onClick={handleClick}
    >
      <span className={`relative z-10 ${textStyles}`}>
        {title}{btnIcon && (<span><img src={btnIcon} alt="button icon" className={iconStyles}/></span>)}
      </span>
    </button>
  )
}

export default Button;