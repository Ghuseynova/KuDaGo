import React from "react"
import PropTypes from "prop-types"
// import classnames from "classnames"
import "./Form.scss"
import sprite from "../../../img/sprite.svg"

const Form = ({ filterText, setFilterText }) => {
	return (
		<form className="form">
			<svg className="form__icon">
				<use href={`${sprite}#icon-search`} />
			</svg>
			<input
				type="text"
				className="form__input"
				value={filterText}
				onChange={(e) =>
					setFilterText(e.target.value.toLocaleLowerCase())
				}
			/>
		</form>
	)
}

Form.defaultProps = {
	filterText: undefined,
}

Form.propTypes = {
	filterText: PropTypes.string,
	setFilterText: PropTypes.func.isRequired,
}

export default Form
