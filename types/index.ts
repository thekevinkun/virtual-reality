import { MouseEventHandler } from "react"

export interface HeadsetProps {
    id: string;
    i: number;
    title: string;
    description: string;
    image: string;
}

export interface ClientProps {
    id: string;
    i: number;
    name: string;
    username: string;
    comment: string;
    image: string;
}

export interface CustomTextProps {
    title: string;
    textStyles?: string;
}

export interface ButtonProps {
    containerStyles?: string;
    textStyles?: string;
    title: string;
    btnIcon?: string;
    iconStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}