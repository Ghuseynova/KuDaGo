import events from "../data/events.json"
import {
	SET_EVENTS_DATA,
	SET_FILTER_CATEGORY,
	SET_TO_FAV,
	SET_SORT_PARAMS,
	DELETE_FROM_FAV,
	SET_FILTER_TEXT,
} from "./types"

const getEvents = () => ({
	type: SET_EVENTS_DATA,
	events,
})

const setFilterCategory = (filter) => ({
	type: SET_FILTER_CATEGORY,
	filter,
})

const setFilterText = (filterText) => ({
	type: SET_FILTER_TEXT,
	filterText,
})

const setSortParams = (order) => ({
	type: SET_SORT_PARAMS,
	order,
})

const addToFavourite = (favId) => ({
	type: SET_TO_FAV,
	favId,
})

const removeFromFavourite = (favId) => ({
	type: DELETE_FROM_FAV,
	favId,
})

export {
	getEvents,
	setFilterCategory,
	setFilterText,
	setSortParams,
	removeFromFavourite,
	addToFavourite,
}
