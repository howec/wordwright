import React, {Component} from "react";
import { Container } from "reactstrap";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'

import "./Page.css";

//SIDEBAR
// import Sidebar from "./Sidebar/Sidebar";

class PageAbout extends Component {
  constructor(props){
    super(props);
    this.state = {page: "Game"};
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


  render (){
    if(this.props.page === "About"){
      return (
        <Container>
            <div id = "centerAboutDiv">
                <h1> About Us </h1>
                <p>This game was created to help people connect with friends and encourage... through storytelling and writing</p>
            </div>
        </Container>
      );
    } else {
      return null;
    }
 }
};

export default PageAbout;
