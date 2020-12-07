import React from "react";
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Roundtable.css';
import wordbank from './wordbank.json';
import TextField from '@material-ui/core/TextField';

const words = Object.keys(wordbank).slice(0, 25);

const Roundtable = () => {
  console.log('hello', words) 
  return (
    <div className='roundtable'>
      <div className='manuscript'>
        <div className='script' id='prompt'>
        Colorless green ideas sleep furiosly
          <div className='wrighter'>prompt</div>
        </div>
        <div className='script' id='wrighter-1'>
        so the host knew John. 
          <div className='wrighter'>Shakespeare</div>
        </div>
        <div className='script' id='wrighter-2'>
        The agent emerged from the shadows
          <div className='wrighter'>Dickens</div>
        </div>
      </div>
      <div className='submission-box'>
        <div className='options'>

        </div>
        <div className='input-box'>
          <TextField id="outlined-basic" label="Write away!" variant="outlined" />
        </div>
        <Button
          className='button'
          variant="outlined"
          color="primary"
          size="small">  
          Let's Wright!
        </Button>
      </div>
      <div className='word-bank'>
        {words.map((word) => {
          return (<div className='word' key={word} id={word}>{word}</div>)
        })}

      </div>
    </div>
  );
};

export default Roundtable;
