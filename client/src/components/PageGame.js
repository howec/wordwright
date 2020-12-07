import React, {Component} from "react";
import { Container, Button } from "reactstrap";
import Roundtable from "./Roundtable/Roundtable";

// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'
import "./Page.css";
import "./PageGame.css";

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
        <div className = "rowPage">
            <Sidebar roomID = {this.props.roomID}></Sidebar>

            <div className='roundtable-container'>
              <Roundtable></Roundtable>
            </div>
            <div style={{textAlign:"center"}} id ="centerOnPage2">
                

                <Button onClick={this.props.toSummary} color="primary" className = "standardizedButton">
                    TEMP: Go to Summary
                </Button>

            </div>
        </div>

      );
    } else {
      return null;
    }
 }
};

export default PageGame;
