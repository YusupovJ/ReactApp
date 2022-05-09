import React from "react";
import { Header } from "../styles/components/Head";

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Header>
				<div className="header__container">header</div>
			</Header>
		);
	}
}
