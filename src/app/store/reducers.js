import { combineReducers } from "redux"
import {
	SET_EVENTS_DATA,
	SET_FILTER_CATEGORY,
	SET_SORT_PARAMS,
	SET_TO_FAV,
	DELETE_FROM_FAV,
	SET_FILTER_TEXT,
} from "./types"

const eventsReducer = (state = [], action) => {
	switch (action.type) {
		case SET_EVENTS_DATA:
			return [...action.events]
		default:
			return state
	}
}

const filterReducer = (
	state = {
		filters: {
			categories: "all",
			filterText: "",
		},
	},
	action
) => {
	switch (action.type) {
		case SET_FILTER_CATEGORY:
			return {
				...state,
				filters: {
					...state.filters,
					categories: action.filter,
				},
			}
		case SET_FILTER_TEXT:
			return {
				...state,
				filters: {
					...state.filters,
					filterText: action.filterText,
				},
			}
		default:
			return state
	}
}

const sortReducer = (
	state = {
		sortOrder: "asc",
	},
	action
) => {
	const newState = { ...state, sortOrder: action.order }

	switch (action.type) {
		case SET_SORT_PARAMS:
			return newState
		default:
			return state
	}
}

const favourites = (state = [], action) => {
	switch (action.type) {
		case SET_TO_FAV:
			return [...state, action.favId]
		case DELETE_FROM_FAV:
			return state.filter((favId) => favId !== action.favId)
		default:
			return state
	}
}

export default combineReducers({
	events: eventsReducer,
	filter: filterReducer,
	sorting: sortReducer,
	favs: favourites,
})
