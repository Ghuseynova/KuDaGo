import { connect } from "react-redux"
import { addToFavourite, removeFromFavourite } from "../store/actions"
import Event from "../components/Event/Event"

const mapStateToProps = (state, ownProps) => ({
	event: state.events.find(
		(item) => item.slug === ownProps.match.params.slug
	),
	favs: state.favs,
})

const mapDispatchToProps = (dispatch) => ({
	addToFavourite: (favId) => dispatch(addToFavourite(favId)),
	removeFromFavourite: (favId) => dispatch(removeFromFavourite(favId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
