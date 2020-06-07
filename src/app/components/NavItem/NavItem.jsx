import React from "react"
import PropTypes from "prop-types"
import "./NavItem.scss"
import classNames from "classnames"
// import Link from "../Link/Link"
import { Link } from "react-router-dom"

const NavItem = ({ linkText, href, className }) => {
	return (
		<li className={classNames(className.item)}>
			<Link to={href} className={className.link}>
				{linkText}
			</Link>
		</li>
	)
}

NavItem.propTypes = {
	linkText: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	className: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default NavItem
