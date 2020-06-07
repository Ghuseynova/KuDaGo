import { connect } from "react-redux"
import { setFilterText } from "../store/actions"
import Form from "../components/Form/Form"

const mapStateToProps = (state) => {
	return {
		filterText: state.filter.filterText,
	}
}

const mapDispatchToProps = (dispatch) => ({
	setFilterText: (filterText) => dispatch(setFilterText(filterText)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
