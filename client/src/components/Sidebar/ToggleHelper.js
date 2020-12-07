import React, { Component } from 'react';


import "./Fade.css";
import Fade from "./Fade";



class ToggleHelper extends Component {
  constructor(props){
    super(props);

    this.state = {}
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


  render() {
    // if on the "Login" page
    if(this.props.toggleStatus === false){
      return(
      <Fade show={true}>
          <div className="content">
            {this.props.children}
          </div>
      </Fade>
      )
    } else {
      return(
      <Fade show={false}>
          <div className="content">
            {this.props.children}
          </div>
      </Fade>
      )
    }
  }


}


export default ToggleHelper;





