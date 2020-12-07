import React, {Component} from "react";
import { Container, Button } from "reactstrap";


import mockup from './Mockup Table.png'; // with import


//GAMESUMMARY
class GameSummary extends Component {
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
    return (
      <div>
          <img src={mockup} />
          <br />
      </div>
      )

 }
};

export default GameSummary;
