import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  state = {
    jokes: []
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/jokes").then(response => {
      this.setState({ jokes: response });
    });
  }

  render() {
    return (
      <div>
        <h1>JOKES</h1>
        {this.state.jokes.map(joke => <p>{joke}</p>)}
      </div>
    );
  }
}

export default Jokes;
