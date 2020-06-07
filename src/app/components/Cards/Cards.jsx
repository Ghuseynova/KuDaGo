import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Cards.scss"
import classNames from "classnames"
import Card from "../Card/Card"
import data from "../../data/events.json"

class Cards extends Component {
	componentDidMount() {
		const { getEvents } = this.props
		getEvents(data)
	}

	render() {
		const { events, addToFavourite, removeFromFavourite, favs } = this.props

		const cardsItems = events.map((event) => {
			return (
				<Card
					dataEvent={event}
					className="cards__item"
					key={event.id}
					addToFavourite={addToFavourite}
					removeFromFavourite={removeFromFavourite}
					favs={favs}
				/>
			)
		})

		return (
			<div>
				<div className={classNames("cards")}>
					<div className="cards__inner">{cardsItems}</div>
				</div>
			</div>
		)
	}
}

Cards.propTypes = {
	events: PropTypes.arrayOf(PropTypes.object).isRequired,
	addToFavourite: PropTypes.func,
	removeFromFavourite: PropTypes.func,
	getEvents: PropTypes.func.isRequired,
	favs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Cards.defaultProps = { addToFavourite: null, removeFromFavourite: null }

export default Cards
