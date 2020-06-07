import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Filter.scss"
import classNames from "classnames"

class Filter extends Component {
	handleClick = (event) => {
		const { setFilterCategory } = this.props
		const categories = event.target.dataset.categ

		setFilterCategory(categories)
	}

	render() {
		const { filterList, className, category } = this.props

		const cFilters = filterList.map((listItem) => (
			<li
				key={listItem.id}
				data-categ={listItem.category.toLowerCase()}
				className={classNames("filter__item", {
					active: listItem.category.toLowerCase() === category,
				})}
				onClick={(e) => this.handleClick(e)}
				onKeyDown={(e) => this.handleClick(e)}
				role="presentation"
			>
				{listItem.name}
			</li>
		))
		return <ul className={classNames("filter", className)}>{cFilters}</ul>
	}
}

Filter.propTypes = {
	filterList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
		.isRequired,
	className: PropTypes.string.isRequired,
	setFilterCategory: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
}

export default Filter
