import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class SIgnUp extends Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/users", this.state).then(response => {
      this.props.history.push("/signin");
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <h1>Please Sign Up</h1>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Please enter a username here."
            value={this.state.username}
            onChange={this.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Please enter a password here."
            value={this.state.password}
            onChange={this.inputHandler}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SIgnUp;
