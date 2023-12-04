import React from 'react'

interface ProjectSingleElemProps {
    projectImageSrc: string
    href: string
    title: string
    className: string
}

export const ProjectSingleElem: React.FC<ProjectSingleElemProps> = ({ projectImageSrc, title, href, className }) => {
    return (
        <div className={`project-sl__single ${className}`}>
            <div className="thumb">
                <a href={href}>
                    <img src={projectImageSrc} alt="Image" />
                </a>
            </div>
            <div className="content">
                <h2>
                    <a href={href}>
                        {title}
                    </a>
                </h2>
            </div>
        </div>
    )
}