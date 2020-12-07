import React, {Component} from "react";
import { Container, Button } from "reactstrap";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import "./Page.css";


//SIDEBAR
import Sidebar from "./Sidebar/Sidebar";

class PageGame extends Component {
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
    if(this.props.page === "Game"){
      return (
        <Container>
          
            <div className = "rowPage">
                <Sidebar roomID = {this.props.roomID}></Sidebar>

                <div style={{textAlign:"center"}} id ="centerOnPage">
                    <h1> GAME </h1>

                    <Button onClick={this.props.toSummary} color="primary" className = "standardizedButton">
                        TEMP: Go to Summary
                    </Button>

                </div>
            </div>

        </Container>
      );
    } else {
      return null;
    }
 }
};

export default PageGame;
