import React from 'react'
import LinesContent from 'shared/ui/design/LinesContent'

function NextPageSection() {
    return (
        <section className="section next-page">
            <div className="container mx-auto">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="section__header text-center">
                            <a href="/about-us" className="sub-title mb-0">
                                Next Page
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <LinesContent />
        </section>
    )
}

export default NextPageSection
