import React, { useState } from "react";
import App from "../components/App";
import { mock } from "./Mock";

const Global = (props) => {
	const [data, setData] = useState(mock);
	return (
		<Global.Provider value={[data, setData]}>
			<App></App>
		</Global.Provider>
	);
};

export default Global;
