import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import reportWebVitals from "./helpers/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/style.scss";

/*------------------------------------*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
