import React from "react";
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LetsWrightButton = () => {
  
  
  // on clicking this button, a room is created
  // Axios Post request, create room, returns json with room_id
  // need websocket to keep track of current players in a room
  // if room has zero Wrighters, it is destroyed

  var createRoom = () => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/create-room',
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });;
  }


  return (
    <Container>
      <Button
        component={Link}
        onClick={createRoom}
        to="/wright"
        variant="outlined"
        color="primary">
        Let's Wright!
      </Button>
    </Container>
  );
};

export default LetsWrightButton;
