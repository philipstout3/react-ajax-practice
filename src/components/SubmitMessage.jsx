import React from 'react';

// var SubmitMessage = (props) => (
// 	console.log(props === undefined),
// 	<form>
// 	<br></br>
// 	<div>Name:</div><input className='nameField' onChange={props.updateName('james', 'hey there')}></input>
// 	<br></br>
// 	<br></br>
// 	<div>Message:</div><input className='messageField'></input>
// 	<br></br>
// 	<br></br>
// 	<button onClick={props.handleSubmit}>Submit</button>
// </form>
// )

class SubmitMessage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<form>
				<br></br>
				<div>Name:</div><input id='nameField' onChange={this.props.updateName}></input>
				<br></br>
				<br></br>
				<div>Message:</div><input id='messageField' onChange={this.props.updateMessage}></input>
				<br></br>
				<br></br>
				<button onClick={this.props.handleSubmit}>Submit</button>
			</form>
		)
	}
}

export default SubmitMessage;