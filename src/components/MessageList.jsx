import React from 'react';

var MessageList = (props) => (
	<form>
		<div>Posts:</div>
		<br></br>
		<li>{props.response}</li>
	</form>
)

export default MessageList;