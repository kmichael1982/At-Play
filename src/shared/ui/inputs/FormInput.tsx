import React, { HTMLProps, ReactNode } from 'react'
import './form-styles.scss'

interface SearchProps extends HTMLProps<HTMLInputElement> {
    label?: string
    register?: any
    optional?: boolean
    className?: string
    icon?: ReactNode
    errorMessage?: string
    handleClick?: () => void
    readOnly?: boolean
}

export const SearchInput: React.FC<SearchProps> = ({
   placeholder,
   onChange,
   className,
   value,
   icon,
       readOnly
}) => {
    return (
        <div className="input">
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type='text'
                readOnly={readOnly ? readOnly : false}
                className={`${className} w-full cursor-pointer py-3 px-4 rounded`}
            />
            <button type="submit" className="subscribe">
                {icon}
            </button>
        </div>
    )
}