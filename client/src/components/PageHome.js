import React, {Component} from "react";
import { Container, Button } from "reactstrap";
import Form from 'react-bootstrap/Form'

import "./Page.css";


// import ReactDOM from 'react-dom';
// import ReactScrollableList from 'react-scrollable-list';


class PageHome extends Component {
  constructor(props){
    super(props);

    this.state = {page: "Home", roomID: null};

    // this.state = {page: "Home", listRooms : this.getRooms(), roomCode : ""};
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

//Following code sippets is to LIST the rooms
/*
            <h5> Open Rooms </h5>
            <div id = "centerElement">
                <div data-reactroot="" className="react-scrollable-list">
                  <ReactScrollableList
                    listItems={this.state.listRooms}
                    heightOfItem={30}
                    maxItemsToRender={20}
                  />
                </div>
            </div>
*/
/*
  //Having a lot of problems getting the items in the list to be clickable
  wrapListItem(content_val){
    return(

      <div className = "react-scrollable-list-item">
          {content_val}
      </div>
    );
  }

  getRooms(){
    //need an API call to the backend for this information
    //need to wrap each item with wrapListItem
    let listItems = [];

    for (let i = 0; i < listItems.length; i++) {
      listItems.push({ id: i, content: this.wrapListItem(i)})
    }

    this.changeState({listRooms: listItems})

  }
*/

  roomError(){
    //if this room doesn't exist in the backend API,
    let apiCall = null;

    if(apiCall === false){
      return (<p><i><font color="#CD5C5C">That room doesn't exist!</font></i></p>);
    } else {
      return null
    }
  }


  render (){
    if(this.props.page === "Home"){
      return (
        <Container>
        
        <div style={{textAlign:"center"}} id ="centerOnPage">
            <h1> WordWright </h1>

             <br />
              <div id = "centerElement">
                <Form onSubmit = {this.props.joinGame}>

                  <Form.Group>
                    <Form.Control required type="text" placeholder="Enter room code" className = "standardizedButton"/>
                  </Form.Group>
                  
                  {this.roomError()}

                  <Button type="submit" color="primary" className = "standardizedButton">
                      Join Room
                  </Button>
                
                </Form>
              </div>

            <h5> - or - </h5>

            <div>
                <Button onClick={this.props.createGame} color="primary" className = "standardizedButton">
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
