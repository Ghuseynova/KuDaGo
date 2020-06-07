import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { children } = this.props
		const { hasError } = this.state

		if (hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>
		}

		return children
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default ErrorBoundary
