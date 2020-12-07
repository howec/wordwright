import React, {Component} from "react";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form'


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR
import {SidebarContainer} from "./SidebarContainer";
import logo from './logo.jpeg'; // with import


class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {prompt : null, username: null, readiness: false};
  }

  _isMounted=false;
  
  componentDidMount(){
   this._isMounted=true;
  }

  componentWillUnmount(){
    this._isMounted=false;
  }

  changeState(data){
    if(this._isMounted){
      this.setState(data)
    }
  }

disable() {
  document.getElementById("radioButton").disabled = true;
}

// undisable() {
//   document.getElementById("radioButton").disabled = false;
// }



  setPrompt(event) {
    console.log(event.target.value);
    this.changeState({prompt: event.target.value});
  }


  setReadiness(event) {
    if(this.state.readiness === false && this.state.prompt !== null){
	    //Make a call and send to the backend
	    this.disable();
    	this.changeState({readiness: true});
    }
    console.log(event.target.value);
  }

  getReadinessButton(){
    if(this.state.readiness === true){
    	return "Waiting...";
    }else{
    	return "Ready!";
    }
  }

  setUsername(event) {
  	event.preventDefault();
  	var name = document.getElementById('form_username').value;
  	console.log(name);

  	//send to backend
  	this.changeState({username : name});
  }

  //TO IMPLEMENT
  nameError(name){
  	//check backend if this name is a duplicate

    let apiCall = null;

    if(apiCall === false){
      return (<p><i><font color="#CD5C5C">That name is already taken!</font></i></p>);
    } else {
      return null
    }

  }

  render (){
	  return (
		    <SidebarContainer width={300} height={"100vh"}>
			    <div className="room-link" style={{textAlign:"left"}}> 

				    <br />
			        <p>Welcome {this.state.username}</p>
			        <p>
			        	Share with your friends:
			        	<br />
						<i>room code here</i>
			        </p>
			    </div>

		        <div className="title-stuff">
		        	<img src={logo} />
		        	<h1>WordWright</h1>
		        </div>
		        <br />
		        
			    <div className = "input-username" id = "centerElement">
			    	<h3> Set a Pen Name </h3>
		        </div>

				    <div id = "centerElement">    
			            <Form onSubmit = {this.setUsername.bind(this)}>

			                  <Form.Group controlId = "form_username">
			                    <Form.Control required type="text" placeholder="Pen name here" className = "standardizedButton" />
			                  </Form.Group>
							
			                  {this.nameError()}

			                
		                </Form>
	                </div>



		        <h3>Select a Prompt</h3>
				<div>
				    <div onChange = {this.setPrompt.bind(this)} className="text-sources" style={{textAlign:"left"}}>
				      {/* Default unchecked */}
				        <input id = "radioButton" type="radio" value="Connection" name="prompt" disabled = {this.state.readiness} /> Connection
				        <br />
				        <input id = "radioButton" type="radio" value="Harry Potter" name="prompt" disabled = {this.state.readiness} /> Harry Potter
				        <br />
				        <input id = "radioButton" type="radio" value="Game of Thrones" name="prompt" disabled = {this.state.readiness} /> Game of Thrones
				        <br />
				        <input id = "radioButton" type="radio" value="Marvel" name="prompt" disabled = {this.state.readiness} /> Marvel
				        <br />
				        <input id = "radioButton" type="radio" value="Lord of the Rings" name="prompt" disabled = {this.state.readiness}/> Lord of the Rings
				        <br />
					</div>
		        </div>
		        <br />

		        <div>
				    <Button onClick={this.setReadiness.bind(this)} color="primary" disabled = {this.state.readiness}>
				        {this.getReadinessButton()}
				    </Button>
			    </div>
			    <br />

			    <div className = "people-listed" style={{textAlign:"left"}}>
			        <p><i>{0} online...</i></p>
		        </div>

		    </SidebarContainer>
	  	);
	}
};

export default Sidebar;
