import React, {Component} from "react";
import { Container, Button } from "reactstrap";

import "./Page.css";

// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR

class PageSummary extends Component {
  constructor(props){
    super(props);
    this.state = {page: "Summary"};
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
    if(this.props.page === "Summary"){
      return (
        <Container>
          <h1> SUMMARY </h1>
        </Container>
      );
    } else {
      return null;
    }
 }
};

export default PageSummary;
