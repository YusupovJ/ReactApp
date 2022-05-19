import React, { useState } from "react";

import Head from "./Head";
import Main from "./Main";
import Foot from "./Foot";

const App = (props) => {
	return (
		<div className="wrapper">
			<Head />
			<Main />
			<Foot />
		</div>
	);
};

export default App;
