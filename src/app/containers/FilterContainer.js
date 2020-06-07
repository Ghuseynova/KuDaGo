import { connect } from "react-redux"
import { setFilterCategory } from "../store/actions"
import Filter from "../components/Filter/Filter"

const mapStateToProps = (state) => {
	return {
		category: state.filter.filters.categories,
	}
}

const mapDispatchToProps = (dispatch) => ({
	setFilterCategory: (filter) => dispatch(setFilterCategory(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
