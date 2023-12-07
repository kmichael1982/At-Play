import React from 'react'

import { Buttons } from 'shared/ui/buttons/ButtonUi'
import { HeaderSecondary } from 'shared/ui/design/header-secondary/HeaderSecondary'
import { TeamMembersSlider } from './team-members-slider/TeamMembersSlider'

import './team-members-styles.scss'

export const TeamMembers = () => {
    return (
        <section className="section team-slider-s">
            <HeaderSecondary
                title="Our Xpovio Team Members"
                label="OUR AWESOME CREW"
                elem={
                    <div className="text-center text-lg-end">
                        <Buttons title="view all teams" href="/our-teams" />
                    </div>
                }
            />

            <TeamMembersSlider />
        </section>
    )
}