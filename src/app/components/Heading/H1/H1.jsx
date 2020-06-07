import React from "react"
import "./H1.scss"
import PropTypes from "prop-types"
import classNames from "classnames"

const H1 = ({ title, className }) => {
	return <h1 className={classNames("h1", className)}>{title}</h1>
}

H1.propTypes = {
	className: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default H1
