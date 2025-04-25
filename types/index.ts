import { MouseEventHandler } from "react"

export interface ButtonProps {
    containerStyles?: string;
    textStyles?: string;
    title: string;
    btnIcon?: string;
    iconStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}