import React from "react"
import "./Link.scss"
import classNames from "classnames"
import PropTypes from "prop-types"

const Link = ({ href, className, children }) => {
	return (
		<a href={href} className={classNames(className)}>
			{children}
		</a>
	)
}

Link.propTypes = {
	className: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default Link
