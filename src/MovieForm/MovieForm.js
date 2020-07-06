import React, { Component } from "react";
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'

class MovieSearch extends Component {

  render() {
    const { onChangeFilter, formData, onClickClear, onClickSubmit } = this.props
    return (
      <Form>
        <FormGroup row>
          <Col xs="12" md="6" xl="6" className="filter-margin">
            <Label htmlFor="s">Movie Title</Label>
            <Input
              name="s"
              id="s"
              placeholder="Enter Movie Title"
              value={formData.s}
              onChange={(e) => onChangeFilter('s', e.target.value)}
            />
          </Col>

          <Col xs="12" md="6" xl="6" className="filter-margin">
            <Label htmlFor="type">Type</Label>
            <Input
              type="select"
              name="type"
              id="type"
              value={formData.type}
              onChange={(e) => onChangeFilter('type', e.target.value)}
            >
              <option>movie</option>
              <option>serie</option>
              <option>episode</option>
            </Input>
          </Col>

          <Col xs="12" md="6" xl="6" className="filter-margin">
            <Label htmlFor="y">Year</Label>
            <Input
              name="y"
              id="y"
              placeholder="Enter Year"
              value={formData.y}
              onChange={(e) => onChangeFilter('y', e.target.value)}
            />
          </Col>

        </FormGroup>
        <FormGroup>
          <Button onClick={onClickSubmit}>Search</Button>
          <Button onClick={onClickClear}>Clear</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default MovieSearch;