import React, { ReactNode } from 'react'

import TextAnimation from 'utils/hooks/useAnimatetText'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'

interface HeaderSecondaryProps {
    label: string
    title: string
    elem: ReactNode
}

export const HeaderSecondary: React.FC<HeaderSecondaryProps> = ({ label, title, elem }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section__header--secondary">
                        <div className="row gaper align-items-center">
                            <div className="col-12 col-lg-8">
                                <div className="section__header text-center text-lg-start mb-0">
                                    <LinkButton
                                        isLink={true}
                                        label={label}
                                        className="sub-title"
                                        icon={<i className="fa-solid fa-arrow-right"></i>}
                                        href="#"
                                    />
                                    <h2 className="title title-anim">
                                        <TextAnimation text={title} />
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                {elem}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}