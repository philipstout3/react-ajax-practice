import React from 'react';
import ReactDOM from 'react-dom';
import SubmitMessage from './SubmitMessage';
import MessageList from './MessageList';

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			oldName: null,
      oldMessage: null,
    };
    this.updateName = this.updateName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var obj = {};
    obj.oldName = this.state.oldName;
    obj.oldMessage = this.state.oldMessage;
  };

  updateName() {
    this.setState({
      oldName: event.target.value,
    });
  };

  updateMessage() {
    this.setState({
      oldMessage: event.target.value,
    });
  };

  render() {
    return(
      <div>
        <MessageList />
        <br></br>
        <SubmitMessage handleSubmit = {this.handleSubmit} updateName = {this.updateName} updateMessage = {this.updateMessage}/>
      </div>
    )
  }
}

export default App;