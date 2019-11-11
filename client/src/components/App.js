import React, { Component } from 'react';
import {Container, Box, Heading} from 'gestalt';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiURL = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiURL);

class App extends Component {
  state = {
    brands: []
  }

  async componentDidMount() {
    try {

      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
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
