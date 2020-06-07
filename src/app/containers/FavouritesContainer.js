import { connect } from "react-redux"
import { removeFromFavourite, getEvents } from "../store/actions"
import Cards from "../components/Cards/Cards"

const mapStateToProps = (state) => ({
	events: state.events.filter((event) =>
		state.favs.filter((fav) => event.id === fav).length > 0 ? true : ""
	),
	favs: state.favs,
})

const mapDispatchToProps = (dispatch) => ({
	getEvents: (data) => dispatch(getEvents(data)),
	removeFromFavourite: (favId) => dispatch(removeFromFavourite(favId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
