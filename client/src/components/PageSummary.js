import React, {Component} from "react";
import { Container, Button } from "reactstrap";
import Form from 'react-bootstrap/Form'

import "./Page.css";

// import { Button, Form, Col, FormGroup, Checkbox } from 'react-bootstrap'


//GAMESUMMARY
import GameSummary from "./GameSummary/GameSummary";


class PageSummary extends Component {
  constructor(props){
    super(props);
    this.state = {page: "Summary", title: "untitled"};
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

  setTitle(event) {
    event.preventDefault();
    var docTitle = document.getElementById('form_title').value;
    console.log(docTitle);

    //send to backend
    this.changeState({title : docTitle});
  }


  //need to change onClick functions...
  render (){
    if(this.props.page === "Summary"){
      return (
        <Container>
            <div className = "rowPage">

                <div style={{textAlign:"center"}} id ="centerOnPage">
                    <h1> Game Stats </h1>
                    <br />


                    <GameSummary></GameSummary>
                    <br />


                    <div className = "input-title" id = "centerElement">
                      <h3> Winner Titles All </h3>
                    </div>

                    <div id = "centerElement">    
                      <Form onSubmit = {this.setTitle.bind(this)}>
                          <Form.Group controlId = "form_title">
                              <Form.Control required type="text" placeholder="untitled" className = "standardizedButton" />
                          </Form.Group>
                      </Form>
                    </div>                    

                    <p><i><b>"{this.state.title}"</b> by Shakespeare, Bronte, Dickens, Tolkien, & Rowling</i></p>


                    <div id = "centerElement">
                        <Button onClick={null} color="primary" className = "standardizedButton">
                            Save .pdf
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button onClick={null} color="primary" className = "standardizedButton">
                            Save .txt
                        </Button>
                    </div>
                    <br />



                    <Button onClick={this.props.joinGame} color="primary" className = "standardizedButton">
                        Play Again!
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

export default PageSummary;
