import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props)
	{
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		};

	}

	onMakeOlder()
	{
		this.setState({
			age: this.state.age + 3
		});
		this.age += 3;
		console.log(this)
	}

	render() {
		return (
			<div>
				<p> In a new Component!</p>
				<p> Your name is {this.props.name}, your age is {this.state.age}</p>
				<p> Status: {this.state.status}</p>
				<hr/>
	          <button onClick ={() => this.onMakeOlder()} className="btn btn-primary"> Make me older!</button>
			</div>
	  );
	}
	 // <button onClick = {this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older!</button>

}

Home.PropTypes = {
	name: PropTypes.string,
	initialAge:  PropTypes.number
};
