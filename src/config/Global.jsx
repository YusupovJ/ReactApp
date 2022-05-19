import React, { createContext, useState } from "react";
import App from "../components/App";
import { mock } from "./Mock";

const GlobalContext = createContext();

const Global = (props) => {
	const [data, setData] = useState(mock);
	return (
		<GlobalContext.Provider value={[data, setData]}>
			<App></App>
		</GlobalContext.Provider>
	);
};

export default Global;
