import React from 'react'
import './breadcrumb-styles.scss'
import BannerImg from 'assets/images/banner/cmn-banner-bg.png'

const BreadCrumb: React.FC<{
    title: string
    description: string
}> = ({ title, description }) => {
    return (
        <section className="cmn-banner bg-img" data-background={BannerImg} style={{backgroundImage: `url(${BannerImg})`}}>
            <div className="container">
                <div className="row gaper items-center" style={{display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(400px, 1fr))'}}>
                    <div className="col-12 col-lg-5 col-xl-7">
                        <div className="text-start lg-text-center">
                            <h2 className="title title-anim">
                                {title}
                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb items-center">
                                    <li className="breadcrumb-item">
                                        <a href="/">
                                            <i className="fa-solid fa-house"></i>
                                            Home
                                        </a>
                                    </li>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-5">
                        <div className="text-start lg-text-center">
                            <p className="primary-text"> {description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadCrumb
