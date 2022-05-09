import React from "react";
import { Footer } from "../styles/components/Foot";

export default class Foot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Footer>
				<div className="footer__container">footer</div>
			</Footer>
		);
	}
}
