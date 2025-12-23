import Image from "next/image";
import { ButtonProps } from "@types";

const Button = ({
  containerStyles,
  textStyles,
  title,
  btnIcon,
  iconStyles,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`button relative inline-flex items-center justify-center text-center ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`relative z-10 ${textStyles}`}>
        {title}
        {btnIcon && (
          <span className="inline-flex">
            <Image
              src={btnIcon}
              alt=""
              width={24}
              height={24}
              sizes="24px"
              className={iconStyles ? iconStyles : "w-6 h-6 object-contain"}
            />
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;
