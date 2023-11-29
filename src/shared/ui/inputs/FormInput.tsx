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
        <div className="input-email">
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type='text'
                readOnly={readOnly ? readOnly : false}
                className={`${className} w-full py-3 px-4 rounded`}
            />
            <button type="submit" className="subscribe">
                {icon}
            </button>
        </div>
    )
}

export const TextInput: React.FC<SearchProps> = ({
    register,
    placeholder,
    onChange,
    className,
    value,
}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder={placeholder}
            className={className}
            {...register}
        />
    )
}

export const TextAreaInput: React.FC<SearchProps> = ({
     placeholder,
     register,
     onChange
}) => {
    return (
         <textarea
             name="contact-message"
             id="contactMessage"
             placeholder={placeholder}
             onChange={onChange}
             {...register}
         />
    )
}

interface PropsOptional {
    label?: string
    register?: any
}
interface SelectProps {
    isOpen?: boolean
    register: any;
    options: string[];
    values?: string[];
    selected: string;
    defaultValue: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    messageId?: string;
    disabled?: boolean;
}

export const SelectInput: React.FC<SelectProps> = ({
   register,
    isOpen,
   options,
   values = [],
   selected,
   defaultValue,
   onChange,
   name,
   messageId = '',
   disabled = false,
}) => {
    return (
        <div className={`nice-select subject ${isOpen && 'open'}`}>
            <span className="current">{selected}</span>
            <ul className="list">
                {options.map((option, index) => (
                    <li
                        key={index}
                        data-value={values[index] || option}
                        className={`option${selected === option ? ' selected' : ''}`}
                        onClick={() => onChange({ target: { value: values[index] || option } } as any)}
                    >
                        {messageId ? <p>{`${messageId}${option}`}</p> : option}
                    </li>
                ))}
            </ul>
        </div>
    )
}