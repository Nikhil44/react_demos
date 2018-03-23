import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props)
	{
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName
		};

		setTimeout(() => {
			this.setState({
				status: 1
			});
			}, 3000);

	}

	onMakeOlder()
	{
		this.setState({
			age: this.state.age + 3
		});
		this.age += 3;
		console.log(this)
	}


	onChangeLink(){
		this.props.changeLink(this.state.homeLink)
	}

	onHandleChange(event)
	{
		this.setState(
			{
			homeLink: event.target.value
			}
		);
	}

	render() {
		return (
			<div>
				<p> In a new Component!</p>
				<p> Your name is {this.props.name}, your age is {this.state.age}</p>
				<p> Status: {this.state.status}</p>
				<hr/>
	            <button onClick ={() => this.onMakeOlder()} className="btn btn-primary"> Make me older!</button>
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary"> Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink} 
				onChange={(event) => this.onHandleChange(event)}/>
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">changeLink </button>
			</div>
	  );
	}
	 // <button onClick = {this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older!</button>

}

Home.PropTypes = {
	name: PropTypes.string,
	initialAge:  PropTypes.number,
	greet: PropTypes.func,
	initialLinkName: PropTypes.string
};
