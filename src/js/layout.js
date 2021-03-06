import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";

import { Navbars } from "./component/navbar";
import { Detailsplanet } from "./views/detailsplanets.jsx";
import { Detailspeople } from "./views/detailspeople.jsx";
import { Detailsstarships } from "./views/detailsstarships.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbars />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planets/:id">
							<Detailsplanet />
						</Route>
						<Route exact path="/people/:id">
							<Detailspeople />
						</Route>
						<Route exact path="/starships/:id">
							<Detailsstarships />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
