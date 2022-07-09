import ReactDOM from "react-dom/client";
import reportWebVitals from "./helpers/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "@store";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BrowserRouter>
		<GlobalContext>
			<Root />
		</GlobalContext>
	</BrowserRouter>
);

reportWebVitals();
