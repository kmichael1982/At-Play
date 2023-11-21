import React, { HTMLProps, ReactNode } from 'react'

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
   handleClick,
   readOnly
}) => {
    return (
        <div className='relative flex gap-4 items-center w-full' onClick={handleClick}>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type='text'
                readOnly={readOnly ? readOnly : false}
                className={`${className} w-full cursor-pointer py-3 px-4 rounded`}
            />
            <div className='cursor-pointer absolute bottom-3.5 right-3 hover:text-red'>
                {icon}
            </div>
        </div>
    )
}