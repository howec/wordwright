import React, {Component} from "react";
import { Container, Button } from "reactstrap";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'

import "./Page.css";

//SIDEBAR
import Sidebar from "./Sidebar/Sidebar";

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



  setReadiness = () => {
    //this.changeState({page: "Create"});
  }


  render (){
    if(this.props.page === "About"){
      return (
        <Container>
          <h1> ABOUT </h1>
        </Container>
      );
    } else {
      return null;
    }
 }
};

export default PageAbout;
