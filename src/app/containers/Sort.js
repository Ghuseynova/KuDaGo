import { connect } from "react-redux"
import { setSortParams } from "../store/actions"
import Dropdown from "../components/Dropdown/Dropdown"

const mapStateToProps = (state) => {
	return {
		order: state.sorting.sortOrder,
	}
}

const mapDispatchToProps = (dispatch) => ({
	setSortParams: (order) => dispatch(setSortParams(order)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
