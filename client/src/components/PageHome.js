import React, {Component} from "react";
import { Container, Button } from "reactstrap";

import "./Page.css";


//SIDEBAR
import Sidebar from "./Sidebar/Sidebar";

class PageHome extends Component {
  constructor(props){
    super(props);
    this.state = {page: "Home"};
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
    if(this.props.page === "Home"){
      return (
        <Container>
        
        <div style={{textAlign:"center"}} id ="centerOnPage">
          <h1> HOME </h1>
          <p> LIST HERE </p>

          <div>
            <Button onClick={this.props.toGame.bind(this)} color="primary">
                Join Room
            </Button>
          </div>

          <h3> OR </h3>

          <div>
            <Button onClick={this.props.createGame.bind(this)} color="primary">
                Create Room
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

export default PageHome;
