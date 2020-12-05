import React from "react";
import { Container, Button } from "reactstrap";
import useLogin from "../hooks/useLogin";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR
import { Sidebar } from "./Sidebar";
import logo from './logo.jpeg'; // with import



const LandingPage = () => {

  const { redirectToDopeAuth } = useLogin();



  const setReadiness = () => {
    //this.changeState({page: "Create"});
  }




  return (
    <Container>

   
	    <Sidebar width={300} height={"100vh"}>
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
			    <div className="text-sources" style={{textAlign:"left"}}>
			      {/* Default unchecked */}

			      <div className="custom-control custom-checkbox">
			        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
			        <label className="custom-control-label">Harry Potter</label>
			      </div>

			      <div className="custom-control custom-checkbox">
			        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
			        <label className="custom-control-label">Lord of the Rings</label>
			      </div>

			      <div className="custom-control custom-checkbox">
			        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
			        <label className="custom-control-label">Game of Thrones</label>
			      </div>			      

			      <div className="custom-control custom-checkbox">
			        <input type="checkbox" className="custom-control-input" id="defaultUnchecked" />
			        <label className="custom-control-label">Connection</label>
			      </div>

			    </div>
	        </div>
	        <br />



	        <h1>Nav Item</h1>

		    <Button onClick={() => setReadiness()} color="primary">
		        I'm ready!
		    </Button>
	    </Sidebar>


	    <h1>{process.env.REACT_APP_NAME}</h1>


	    <Button onClick={() => redirectToDopeAuth()} color="primary">
	        Login with DopeAuth. THIS IS THE LANDING PAGE
	    </Button>

    
    </Container>
  );
};

export default LandingPage;
