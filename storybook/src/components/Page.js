import React, { Fragment } from "react";
import PropsTypes from "prop-types";

function Page({ title, titleText, image, heading, headingText, footer }) {
    // const { title, titleText, image, heading, headingText, footer } = props
    return (
        <Fragment>
            <div className="page_head">
                <img src={image} alt={title} />
                <title>{title}</title>
                <p>{titleText}</p>
            </div>
            <div className="page_body">
                <h1>{heading}</h1>
                <p>{headingText}</p>
            </div>
            <div className="page_footer">
                <p>{footer}</p>
            </div>
        </Fragment>
    )
}

Page.propTypes = {
    title: PropsTypes.string,
    titleText: PropsTypes.string,
    image: PropsTypes.string,
    heading: PropsTypes.string,
    headingText: PropsTypes.string,
    footer: PropsTypes.string,
}

export default Page
