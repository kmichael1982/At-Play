import React from 'react'
import TextAnimation from 'utils/hooks/useAnimatetText'
import { Buttons, LinkButton } from 'shared/ui/buttons/ButtonUi'

export const HeaderSecondary = () => {
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
                                        label="our awesome crew"
                                        className="sub-title"
                                        icon={<i className="fa-solid fa-arrow-right"></i>}
                                        href="#"
                                    />
                                    <h2 className="title title-anim">
                                        <TextAnimation text="Our" />
                                        <TextAnimation text="Xpovio" />
                                        <TextAnimation text="Team" />
                                        <TextAnimation text="Members" />
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="text-center text-lg-end">
                                    <Buttons title="view all teams" href="/our-teams" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}