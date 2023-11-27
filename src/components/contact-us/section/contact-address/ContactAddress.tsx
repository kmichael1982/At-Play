import React from 'react'

const ContactAddress = () => (
    <div className="contact__map fade-top"
         style={{
             translate: 'none',
             rotate: 'none',
             scale: 'none',
             transform: 'translate(0px, 0px)', opacity: 1}}
    >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd" width="100" height="800"
                style={{border:0}} loading="lazy"></iframe>
    </div>
)

export default ContactAddress
