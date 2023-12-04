import React, { useEffect, useRef, useState } from 'react'
import { animateItem } from 'shared/ui/design/animation/animateItem'

interface UxProcessItemsProps {
    index: number
    title: string
    content: string
}

export const UxProcessItems: React.FC<UxProcessItemsProps> = ({ index, title, content }) => {
    const [ activeIndex, setActiveIndex ] = useState<number | null>(null)
    const itemRef = useRef<HTMLDivElement | any>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    const toggleAccordion = (index: number | null) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

  return (
      <div
          key={index}
          ref={itemRef}
          className={`service-f-single fade-top ${activeIndex === index ? 'service-f-single-active' : ''}`}
          style={{animationDelay: `${1.2 + 0.4*index}s`}}
      >
          <div className="single-item single-item-active">
              <div className="intro-btn" onClick={() => toggleAccordion(index)}>
                  <h4>{title}</h4>
              </div>
          </div>
          <div className={`single-item p-single p-sm body-cn ${activeIndex === index ? 'show' : ''}`}>
              <p>{content}</p>
          </div>
          <button className="toggle-service-f" onClick={() => toggleAccordion(index)}></button>
      </div>
  )
}