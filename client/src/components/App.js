import React, { Component } from 'react';
import {Container, Box, Heading} from 'gestalt';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box
          display="flex"
          justifyContent="Center"
          marginBottom={2}
        >
        {/* Brands Section */}
        <Heading color="midnight" size="md">
          Brew Brands
        </Heading>

        </Box>
      </Container>
    );
  }
}

export default App;
