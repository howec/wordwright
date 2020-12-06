import React, {Component} from "react";
import { Container, Button } from "reactstrap";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR
import Sidebar from "./Sidebar";

class LandingPage extends Component {
  constructor(props){
    super(props);
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



  setReadiness = () => {
    //this.changeState({page: "Create"});
  }


  render (){

  return (
    <Container>
	    <Sidebar></Sidebar>
    </Container>
  );
 }
};

export default LandingPage;
