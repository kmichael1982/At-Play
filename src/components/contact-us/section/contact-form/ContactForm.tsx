import React, { useState } from 'react'
import { SelectInput, TextAreaInput, TextInput } from 'shared/ui/inputs/FormInput'
import { Buttons } from 'shared/ui/buttons/ButtonUi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendMessageEmailSchema } from 'shared/validations/contact'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const ContactForm = () => {
    type FormSchemaType = z.infer<typeof sendMessageEmailSchema>
    const [filterOptions, setFilterOptions] = useState<any>({})
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const onFilterChange = ({ target }: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name } = target as HTMLInputElement
        setFilterOptions(name)
    }

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isValid, isSubmitted },
    } = useForm<FormSchemaType>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        resolver: zodResolver(sendMessageEmailSchema),
    })

    const onSubmit: SubmitHandler<FormSchemaType> = data => {
        console.log(data, "contact form data")
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="section__content-cta"
        >
            <div className="group-wrapper">
                <div className="group-input ">
                    <TextInput
                        type="text"
                        name="contact-name"
                        id="contactName"
                        register={register('name')}
                        placeholder="Name"
                    />
                </div>

                <div className="group-input ">
                    <TextInput
                        type="email"
                        name="contact-email"
                        id="contactEmail"
                        register={register('email')}
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="group-input" onClick={() => setIsOpen(!isOpen)}>
                <SelectInput
                    register={register('subject')}
                    options={['Account', 'Service', 'Pricing', 'Support']}
                    selected="Subject"
                    defaultValue="Subject"
                    onChange={onFilterChange}
                    name="subject"
                    isOpen={isOpen}
                />
            </div>
            <TextAreaInput id="contactMessage" register={register('message')} placeholder="Message"/>
            <div className="form-cta justify-content-start">
                <Buttons title="Send Message" />
            </div>
        </form>
    )
}