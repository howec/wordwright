import React from "react";
// import {ChatBox} from 'react-chatbox-component';
// import { ChatBox, } from 'react-chatbox-component';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';
import { MenuItem, MenuList } from "@material-ui/core";

const messages = [
  {
    "text": "Hello there",
    "id": "1",
    "sender": {
      "name": "Ironman",
      "uid": "user1",
      "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
    },
  },
]
// numberOfWriters
// 
// when you input and enter into text field,



const inputProps = {
  step: 300,
};

// initialized, ready, in-progress, completed





const WrightPage = () => {
  // if status is uninitialized, render room not found error
  // if status is initialized, render active sidebar and inactive room
  // if status is ready, render inactive sidebar and active room
  // if status is in-progress, render session is in progress screen
  // if status is completed, render summary page

  axios({
    method: 'get',
    url: '/wright',
    
  });

  return (
    <div>
      


      
      <form className="name" noValidate autoComplete="off">

        <TextField id="outlined-basic" label="Write away!" variant="outlined" />
      </form>
    
  </div>
  );
};

export default WrightPage;
