import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import "../sass/main.scss"
import App from "./App"
import store from "./store/index"

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
)
