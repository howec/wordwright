import React from "react";
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <Container>
      <h1>WordWright</h1>
      
      <Button component = { Link } to="/wright" variant="outlined" color="primary">
        Let's Wright!
      </Button>

    </Container>
  );
};

export default LandingPage;
