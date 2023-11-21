import React, { ReactNode } from 'react'
import './button.css'

export interface BaseButtonProps {
    title?: string
    onClick?: () => void
    className?: string
}

export interface ButtonProps extends BaseButtonProps {
    disabled?: boolean
    buttonType?: 'submit' | 'button' | 'reset'
}

export const Buttons: React.FC<ButtonProps> = ({
    title,
    className,
    onClick,
    disabled,
    buttonType
}) => {

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={buttonType}
            className={`py-4 px-8 font-bold rounded-full text-center border-2 uppercase bg-none border-[#414141] hover:bg-red hover:text-black hover:border-red transition duration-300 ease-in-out transform hover:translate-x-2 ${
                className ? className : ''
            }`}
        >
            {title}
        </button>
    )
}

export const LinkButton: React.FC<{ className?: string, href?: string, label: string, icon?: ReactNode }> = ({
    className,
    href,
    label,
    icon
}) => {

    return (
        <a
            className={`cursor-pointer ${className ? className : ''} flex items-center gap-2 hover:text-red transition-all duration-500 ease-in-out capitalize`}
            href={href ? href : '#'}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon && icon}
            {label}
        </a>
    )
}

export const SocialLinkButton: React.FC<{ className?: string, href?: string, icon?: ReactNode }> = ({
     className,
     href,
     icon
}) => {

    return (
        <a
            className={`cursor-pointer ${className ? className : ''} w-10 h-10 flex items-center justify-center hover:bg-red transition-all border text-white border-[#414141] duration-500 ease-in-out rounded-full`}
            href={href ? href : '#'}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon && icon}
        </a>
    )
}