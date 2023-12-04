
import React from 'react'
import { SocialLinkButton } from 'shared/ui/buttons/ButtonUi'

const SocialMenuList = () => (
    <>
        <SocialLinkButton
            href="https://www.facebook.com/"
            icon={<i className="fa-brands fa-facebook-f"></i>}
        />
        <SocialLinkButton
            href="https://www.twitter.com/"
            icon={<i className="fa-brands fa-twitter"></i>}
        />

        <SocialLinkButton
            href="https://www.pinterest.com/"
            icon={<i className="fa-brands fa-linkedin-in"></i>}
        />

        <SocialLinkButton
            href="https://www.instagram.com/"
            icon={<i className="fa-brands fa-instagram"></i>}
        />
    </>
)

export default SocialMenuList