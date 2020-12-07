import React, {Component} from "react";
import { Container, Button } from "reactstrap";

import "./Page.css";

// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//SIDEBAR
import Sidebar from "./Sidebar/Sidebar";


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


  render (){
    if(this.props.page === "Summary"){
      return (
        <Container>
            <div className = "rowPage">

                <div style={{textAlign:"center"}} id ="centerOnPage">
                    <h1> SUMMARY </h1>
                </div>
            </div>
        </Container>
      );
    } else {
      return null;
    }
 }
};

export default PageSummary;
