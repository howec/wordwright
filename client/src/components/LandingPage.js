import React, {Component} from "react";


// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//NAVBAR
import NavigationBar from './NavigationBar'


//PAGES
import PageHome from "./PageHome";
import PageGame from "./PageGame";
import PageSummary from "./PageSummary";
import PageAbout from "./PageAbout";


class LandingPage extends Component {
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


  toHome = () => {
      this.changeState({page: "Home"})
  }


  toAbout = () => {
      this.changeState({page: "About"})
  }


  joinGame = (roomCode) => {
      //check if Room code is valid, if so join that specific room and change the client
      //set the roomID to not be null
      if (this.state.roomID === null){
          this.changeState({roomID: "abc0"}); //should be roomCode ... dummy var
      }

      this.changeState({page: "Game"});
  }

  createGame = () => {
      //create a new Room code to join and play in; forward creator into that room
      //set the roomID to not be null
      this.changeState({roomID: "abc0"});


      this.changeState({page: "Game"})
  }


  toSummary = () => {
      this.changeState({page: "Summary"})
  }



  setReadiness = () => {
    //this.changeState({page: "Create"});
  }


  render (){
    if(this.state.page === "Home"){
      return (
        <div>
          <NavigationBar
            navbarItems = {[[this.toHome, "Home"], [this.toAbout, "About"]]}/>
          <PageHome page = {this.state.page} joinGame = {this.joinGame} createGame = {this.createGame}/>
        </div>
      );
    } else if (this.state.page === "Game"){
      return (
        <div>
          <NavigationBar
            navbarItems = {[[this.toHome, "Home"], [this.toAbout, "About"]]}/>
          <PageGame page = {this.state.page} roomID = {this.state.roomID} toSummary = {this.toSummary}/>
        </div>
        );
    } else if (this.state.page === "Summary"){
      return (
        <div>
          <NavigationBar
            navbarItems = {[[this.toHome, "Home"], [this.toAbout, "About"]]}/>
          <PageSummary page = {this.state.page} joinGame = {this.joinGame} />
        </div>
        );
    } else if (this.state.page === "About"){
      return (
        <div>
          <NavigationBar
            navbarItems = {[[this.toHome, "Home"], [this.toAbout, "About"]]}/>
          <PageAbout page = {this.state.page} />
        </div>
        );
    }
 }
};

export default LandingPage;
