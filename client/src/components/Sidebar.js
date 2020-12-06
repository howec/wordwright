import React, {Component} from "react";
import { Container, Button } from "reactstrap";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR
import {SidebarContainer} from "./SidebarContainer";
import logo from './logo.jpeg'; // with import


class Sidebar extends Component {
  constructor(props){
    super(props);

    this.state = {inspiration : null};
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


  setInspiration(event) {
    console.log(event.target.value);
    this.changeState({inspiration: event.target.value});
  }


  setReadiness(event) {
    //Make a call and send to the backend
    console.log(event.target.value);
  }

  render (){
	  return (
		    <SidebarContainer width={300} height={"100vh"}>
			    <div className="room-link" style={{textAlign:"left"}}> 
			        <p>Welcome USERNAME-HERE!</p>
			        <p>
			        	Invite your friends:
			        	<br />
						<i>room url here</i>
			        </p>
		        </div>
		        <br />

		        <div className="title-stuff">
		        	<img src={logo} />
		        	<h1>WORDWRIGHT</h1>
		        </div>
		        <br />
		        
		        <h1>Inspiration</h1>
				<div>
				    <div onChange = {this.setInspiration.bind(this)} className="text-sources" style={{textAlign:"left"}}>
				      {/* Default unchecked */}
				        <input type="radio" value="Connection" name="inspiration" /> Connection
				        <br />
				        <input type="radio" value="Harry Potter" name="inspiration" /> Harry Potter
				        <br />
				        <input type="radio" value="Game of Thrones" name="inspiration" /> Game of Thrones
				        <br />
				        <input type="radio" value="Marvel" name="inspiration" /> Marvel
				        <br />
				        <input type="radio" value="Lord of the Rings" name="inspiration" /> Lord of the Rings
				        <br />
					</div>
		        </div>
		        <br />

		        <div>
				    <Button onClick={this.setReadiness.bind(this)} color="primary">
				        Ready!
				    </Button>
			    </div>
			    <br />

			    <div className = "people-listed" style={{textAlign:"left"}}>
			        <p><i>People present...</i></p>
		        </div>

		    </SidebarContainer>
	  	);
	}
};

export default Sidebar;
