import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import SubmitMessage from './SubmitMessage';
import MessageList from './MessageList';
import $ from 'jQuery'; 

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			oldName: 'phil',
      oldMessage: 'fdsaasdf',
      response: ''
    };
    this.updateName = this.updateName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
  }


componentDidMount(){
  this.handleSubmit();
};


  
handleSubmit() {
  var params = {
    "name": this.state.oldName, 
    "message": this.state.oldMessage
  }
  $.ajax({
    url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting',
    method: 'POST',
    data: JSON.stringify( params ),
    contentType: "application/json",
    success: (data) => this.setState({
      response: data
    })
    // success: (data) => {console.log(data)}
  });
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
        <MessageList response = {this.state.response}/>
        <br></br>
        <SubmitMessage handleSubmit = {this.handleSubmit} updateName = {this.updateName} updateMessage = {this.updateMessage}/>
      </div>
    )
  }
}

export default App;