import React, { useEffect, useRef } from 'react'

import { animateItem } from 'utils/hooks/animateItem'
import { TextAreaInput, TextInput } from 'shared/ui/inputs/FormInput'

export const BlogDetailsCommentForm = () => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        animateItem(itemRef)
    }, [])

    return (
        <div
            className="section pb-0 comment-form fade-top"
            style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: 1 }}
            ref={itemRef}
        >
            <div className="section__header">
                <h2 className="h2 text-start">Leave a comment</h2>
            </div>
            <form action="#" method="post">
                <div className="form-group-wrapper">
                    <div className="form-group-single">
                        <TextInput placeholder="Name" />
                    </div>
                    <div className="form-group-single">
                        <TextInput placeholder="Email" />
                    </div>
                </div>
                <div className="form-group-single">
                    <TextAreaInput placeholder="Write Comment..."/>
                </div>
                <div className="cta__group">
                    <button type="submit" className="btn btn--ocotonary">
                        post comment
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}