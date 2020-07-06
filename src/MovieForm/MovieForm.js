import React, { Component } from "react";
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap'

class MovieSearch extends Component {

  render() {
    const { onChangeFilter, formData, onClickClear } = this.props
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
              <option value={''} key={0}>Select a type</option>
              <option value={'movie'} key={1}>movie</option>
              <option value={'series'} key={2}>series</option>
              <option value={'episode'} key={3}>episode</option>
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
          <Button onClick={onClickClear}>Clear</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default MovieSearch;