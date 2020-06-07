import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./Button.scss"

const Button = ({ className, children }) => {
	return (
		<button className={classNames("btn", className)} type="button">
			{children}
		</button>
	)
}

Button.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
}

export default Button
