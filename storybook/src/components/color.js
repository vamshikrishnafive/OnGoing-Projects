import React, { Fragment } from "react";
import PropsTypes from "prop-types";

function Color({ Primary, secondary, danger }) {
    // const { title, titleText, image, heading, headingText, footer } = props
    return (
        <Fragment>
            <div className = {Primary}></div>
            <div className={secondary}></div>
            <div className={danger}></div>
        </Fragment>
    )
}

Color.propTypes = {
    Primary: PropsTypes.bool,
    secondary: PropsTypes.bool, 
    danger: PropsTypes.bool
}

export default Color
