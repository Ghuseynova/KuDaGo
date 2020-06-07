import React from "react"
import classNames from "classnames"
import Proptypes from "prop-types"
import "./Icon.scss"

const Icon = ({ className, iconId }) => {
	return (
		<svg className={classNames("icon", className)}>
			<use href={`../../../img/sprite.svg#${iconId}`} />
		</svg>
	)
}

Icon.propTypes = {
	className: Proptypes.string.isRequired,
	iconId: Proptypes.string.isRequired,
}

export default Icon
