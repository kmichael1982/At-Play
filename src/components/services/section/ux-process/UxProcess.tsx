import React from 'react'

import TextAnimation from 'utils/hooks/useAnimatetText'
import { UxProcessItems } from './us-process-items/UxProcessItems'

import './ux-process-styles.scss'

interface UxProcessItemsProps {
    title: string
    content: string
}

interface UxProcessProps {
    className?: string
}

export const UxProcess: React.FC<UxProcessProps> = ({ className }) => {
    const uxProcessItems: UxProcessItemsProps[] = [
        { title: 'User Research', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
        { title: 'Story Board', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
        { title: 'Wireframing', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
        { title: 'Prototyping', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
        { title: 'Usability Testing', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
        { title: 'UI Design', content: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation for the brand.' },
    ]

    return (
        <section className={`section ux-process fade-wrapper ${className}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                            <span className="sub-title">
                            UX Process
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                            <h2 className="title title-anim">
                                <TextAnimation text="Working Ux Process" />
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="service-f-wrapper">
                            {uxProcessItems.map((item, index) => (
                                <UxProcessItems
                                    index={index}
                                    title={item.title}
                                    content={item.content}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}