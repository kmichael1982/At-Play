import React from 'react'

export const SocialList = () => {
    return (
        <div className="social justify-content-start justify-content-lg-start">
            <a href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>Linkedin</span>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
            </a>
            <a href="https://www.dribble.com/" target="_blank">
                <i className="fa-brands fa-dribbble"></i>
                <span>Dribble</span>
            </a>
        </div>
    )
}