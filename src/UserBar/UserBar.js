import React, { Component } from "react";
import { Button, Row, Col } from 'reactstrap'

export default class UserBar extends Component {
  render() {
    return (
      <div className='App-header'>
        <Row>
          <Col>
            MOVIE SEARCH ( GFI )
          </Col>
          <Col className='Logout-col'>
            <small>Logged as: {window.sessionStorage.getItem('userName')}</small>
            <Button
              className='Logout-button'
              outline
              color="warning"
              onClick={() => this.props.logout()}>
              Logout
              </Button>
          </Col>
        </Row>


      </div>
    )
  }
}