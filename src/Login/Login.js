import React, { Component } from "react";
import { Row, Col, CardHeader, CardBody, Card, Button, Input, Label, Form, FormGroup } from 'reactstrap'

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
      <Card className='App-card'>
        <CardHeader>
          <h2>MOVIE SEARCH ( GFI )</h2>
        </CardHeader>
        <CardBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">User Name</Label>
                  <Input
                    name="username"
                    id="username"
                    placeholder="Enter User Name"
                    value={this.state.username}
                    onChange={(e) => this.handleOnChange('username', e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
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
              </Col>
            </Row>
            <FormGroup>
              <Button
                outline
                color="primary"
                onClick={() => this.props.login(this.state.username, this.state.password)}>
                Login
                </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default Login;