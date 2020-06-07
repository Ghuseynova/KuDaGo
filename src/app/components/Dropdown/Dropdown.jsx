import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Dropdown.scss"
import classNames from "classnames"
import sprite from "../../../img/sprite.svg"

class Dropdown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpened: false,
			selectedValue: "Сортировать по",
		}
	}

	handleToggleClick = (e) => {
		e.preventDefault()
		this.setState((state) => ({
			isOpened: !state.isOpened,
		}))

		document.addEventListener("click", this.handleOutSideClick)
	}

	handleOutSideClick = () => {
		this.setState({
			isOpened: false,
		})
		document.removeEventListener("click", this.handleOutSideClick)
	}

	handleSortType = (direction, value) => {
		const { setSortParams } = this.props
		this.setState({
			isOpened: false,
			selectedValue: value,
		})

		setSortParams(direction)
	}

	render() {
		const { dropdownOptions, className, order } = this.props
		const { selectedValue, isOpened } = this.state

		const dOptions = dropdownOptions.map((option) => (
			<li
				className={classNames("dropdown__options-item", {
					active: option.direction === order,
				})}
				key={option.direction}
				id={option.direction}
			>
				<a
					href="/#"
					className="dropdown__options-link"
					onClick={(e) => {
						e.preventDefault()
						this.handleSortType(option.direction, option.text)
					}}
				>
					{option.text}
				</a>
			</li>
		))

		return (
			<div
				className={classNames("dropdown", className, {
					open: isOpened,
				})}
			>
				<a
					href="/#"
					className="dropdown__link"
					onClick={(e) => this.handleToggleClick(e)}
				>
					<svg className="dropdown__caret">
						<use href={`${sprite}#icon-keyboard_arrow_down`} />
					</svg>
					<span className="dropdown__text">{selectedValue}</span>
				</a>
				<ul className="dropdown__options">{dOptions}</ul>
			</div>
		)
	}
}

Dropdown.propTypes = {
	dropdownOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
		.isRequired,
	className: PropTypes.string.isRequired,
	setSortParams: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
}

export default Dropdown
