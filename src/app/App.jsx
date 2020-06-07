import React from "react"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import Header from "./components/Header/Header"
import Events from "./pages/Events/Events"
import Favourites from "./pages/Favourites/Favourites"
import EventDetail from "./pages/EventDetail/EventDetail"

const App = () => {
	return (
		<Router>
			<div className="app">
				<div className="app-header">
					<Header />
				</div>
				<div className="app-content">
					<Switch>
						<Route path="/event" exact component={Events} />

						<Route path="/favourites" component={Favourites} />

						<Route path="/event/:slug" component={EventDetail} />

						<Redirect from="/" to="/event" />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
