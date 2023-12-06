import React, { useEffect, useRef } from 'react'
import { LinkButton } from 'shared/ui/buttons/ButtonUi'
import { animateItem } from 'shared/ui/animation/animateItem'

interface OfferCtaItemProps {
    index: number
    getServiceTitle: (index: number) => string
    getServiceImage: (index: number) => string
}

const VIEW_ALL_SERVICES_URL = '/our-services'
const SERVICE_SINGLE_URL = '/service-single'

export const OfferCtaItem: React.FC<OfferCtaItemProps> = ({ index, getServiceTitle, getServiceImage }) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div ref={itemRef} key={index} className="offer__cta-single fade-top">
            <LinkButton
                isLink={true}
                label={`0${index}`}
                className="sub-title"
                icon={<i className="fa-solid fa-arrow-right"></i>}
                href="#"
            />
            <h2>
                <a className="flex" href={SERVICE_SINGLE_URL}>
                    {getServiceTitle(index)}
                    <i className="fa-solid fa-arrow-right" style={{transform: 'rotate(320deg)'}}></i>
                    {/*<i className="fa-sharp fa-solid fa-arrow-up-right"></i>*/}
                </a>
            </h2>
            <div
                className="offer-thumb-hover none block"
                data-background={getServiceImage(index)}
                style={{backgroundImage: `url(${getServiceImage(index)})`, transform: 'translate(196px, 96.8449px) rotate(15deg)'}}
            ></div>
        </div>
  )
}