import React, { ReactNode } from 'react'
import './button.css'

export interface BaseButtonProps {
    title?: string
    className?: string
}

export interface ButtonProps extends BaseButtonProps {
    href?: string
}

export const Buttons: React.FC<ButtonProps> = ({
    title,
    className,
    href,
}) => {

    return (
        <div className={`${className && className}`}>
            <a href={href ? href : '#'} className="btn btn--secondary">
                {title}
            </a>
        </div>
    )
}

export const LinkButton: React.FC<{ isLink?: boolean, className?: string, href?: string, label: string, icon?: ReactNode }> = ({
    isLink,
    className,
    href,
    label,
    icon
}) => {

    return (
        <a
            className={`cursor-pointer ${className ? className : 'flex items-center gap-2 hover:text-red transition-all duration-500 ease-in-out capitalize'}`}
            href={href ? href : '#'}
            rel="noopener noreferrer"
        >
            {isLink ? (
                <>
                    {label} {icon && icon}
                </>
            ) : (
                <>
                    {icon && icon} {label}
                </>
            )}
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
            className={`cursor-pointer ${className && className}`}
            href={href ? href : '#'}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon && icon}
        </a>
    )
}