import { connect } from "react-redux"
import {
	getEvents,
	addToFavourite,
	removeFromFavourite,
} from "../store/actions"
import Cards from "../components/Cards/Cards"

const filterByCategory = (events, filterCategory) => {
	const filteredEvents = events.filter((event) =>
		event.category.some((category) => category === filterCategory)
	)

	return filterCategory === "all" ? events : filteredEvents
}

const filterByText = (events, filterText) => {
	const filteredEvents = events.filter(
		(event) =>
			event.description
				.toLocaleLowerCase()
				.includes(filterText.toLocaleLowerCase()) ||
			event.title
				.toLocaleLowerCase()
				.includes(filterText.toLocaleLowerCase())
	)

	return filterText === "" ? events : filteredEvents
}

const filterEvents = (events, filters) => {
	const { categories, filterText } = filters

	const filteredEvents = filterByText(
		filterByCategory(events, categories),
		filterText
	)

	return filteredEvents
}

const sortEvents = (events, order) => {
	return events.sort((a, b) => {
		const aPrice = a.price && a.price.replace(/[^0-9]/g, "")
		const bPrice = b.price && b.price.replace(/[^0-9]/g, "")

		return order !== "asc" ? aPrice - bPrice : bPrice - aPrice
	})
}

const getVisibleEvents = (events, filters, sorting) => {
	return sortEvents(filterEvents(events, filters), sorting)
}

const mapStateToProps = (state) => {
	const { favs } = state
	const events = [...state.events]
	const { filters } = state.filter
	const order = state.sorting.sortOrder

	return {
		events: getVisibleEvents(events, filters, order),
		favs,
	}
}

const mapDispatchToProps = (dispatch) => ({
	getEvents: (data) => dispatch(getEvents(data)),
	addToFavourite: (favId) => dispatch(addToFavourite(favId)),
	removeFromFavourite: (favId) => dispatch(removeFromFavourite(favId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
