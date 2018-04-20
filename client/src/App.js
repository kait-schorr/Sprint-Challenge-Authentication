import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import { Route } from "react-router-dom";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Jokes from "./components/Jokes";

class App extends Component {
  state = {
    user: null
  };

  signInSuccess = data => {
    this.setState({ user: data.user });
    localStorage.setItem("authtoken", data.token);
  };

  render() {
    return (
      <Container className="App">
        <Route exact path="/" render={props => <SignUp {...props} />} />
        <Route
          path="/signin"
          render={props => <SignIn {...props} onSignIn={this.signInSuccess} />}
        />
        <Route path="/jokes" component={Jokes} />
      </Container>
    );
  }
}

export default App;
