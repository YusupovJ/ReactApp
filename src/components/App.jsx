import React from "react";

import Head from "./Head";
import Main from "./Main";
import Foot from "./Foot";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="wrapper">
				<Head />
				<Main />
				<Foot />
			</div>
		);
	}
}
