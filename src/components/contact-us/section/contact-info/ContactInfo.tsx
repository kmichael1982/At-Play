import React from 'react'

const ContactInfo: React.FC<{
    icon: string,
    title: string,
    lines: { href?: string; text: string }[]
}> = ({ icon, title, lines }) => (
    <div className="col-12 col-sm-6 col-xl-3">
        <div className="contact-m__single topy-tilt fade-top">
            <div className="thumb">
                <img src={icon} className="mx-auto" alt="Image" />
            </div>
            <div className="content">
                <h4>{title}</h4>
                {lines.map((line, index) => (
                    <p key={index}>
                        <a href={line.href ? line.href : '#'}>{line.text}</a>
                    </p>
                ))}
            </div>
        </div>
    </div>
)

export default ContactInfo