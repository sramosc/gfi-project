import React, { Component } from "react";
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnChange(field, value) {
    this.setState({ [field]: value })
  }

  render() {
    return (
      <div>
        <h2>LOGIN</h2>
        <Form>
          <FormGroup>
            <Label for="username">User Name</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter User Name"
              value={this.state.username}
              onChange={(e) => this.handleOnChange('username', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={(e) => this.handleOnChange('password', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button onClick={() => this.props.login(this.state.username, this.state.password)}>Login</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;