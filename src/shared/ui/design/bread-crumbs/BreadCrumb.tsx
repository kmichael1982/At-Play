import React from 'react'

import { useLocation } from 'react-router-dom'
import TextAnimation from 'utils/hooks/useAnimatetText'

import BannerImg from 'assets/images/banner/cmn-banner-bg.png'
import './breadcrumb-styles.scss'

interface BreadCrumbProps {
    title: string
    pathName?: string
    href?: string
    description?: string
    isService?: boolean
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ title, pathName, href, description, isService }) => {
    const location = useLocation()

    const breadcrumbElem = location.pathname === pathName && 'our-services'
    let params = new URLSearchParams(location.search)
    const query = params.get('query')

    return (
        <section className="cmn-banner bg-img" data-background={BannerImg} style={{backgroundImage: `url(${BannerImg})`}}>
            <div className="container">
                <div className="row gaper align-items-center">
                    <div className={`${description ? 'col-12 col-lg-5 col-xl-7' : 'col-12' }`}>
                        <div className="text-center text-lg-start">
                            <h2 className="title title-anim">
                                <TextAnimation text={href ? href : query ? query : title} />
                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb items-center">
                                    <li className="breadcrumb-item">
                                        <a href="/">
                                            <i className="fa-solid fa-house"></i>
                                            Home
                                        </a>
                                    </li>

                                    {breadcrumbElem && (
                                        <li className="breadcrumb-item">
                                            <a href={`/${breadcrumbElem}`}>
                                                {breadcrumbElem}
                                            </a>
                                        </li>
                                    )}

                                    <li className="breadcrumb-item active" aria-current="page">
                                        {query ? query : title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className={`${description ? 'col-12 col-lg-7 col-xl-5' : 'd-none'}`}>
                        {
                            query ? (
                                <div className="slide-group justify-content-center justify-content-lg-end">
                                    <a href="/service-single" aria-label="previous item" className="slide-btn ">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </a>
                                    <a href="/service-single" aria-label="next item" className="slide-btn">
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center text-lg-start">
                                    <p className="primary-text"> {description} </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb