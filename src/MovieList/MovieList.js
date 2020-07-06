import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { FormGroup, Label, Col, Input } from 'reactstrap'

class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.rowEvents = {
      onClick: (e, row) => { this.props.onClickMovie(row.imdbID) }
    }

    // title, year, imdbId, type
    this.columns = [{
      dataField: 'Title',
      text: 'Title',
    }, {
      dataField: 'Year',
      text: 'Year',
    },
    {
      dataField: 'Type',
      text: 'Type',
    }]

  }

  render() {

    this.pages = []
    for (let i = 1; i <= this.props.totalPages; i++) {
      this.pages.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <div>
        <BootstrapTable
          keyField="imdbID"
          data={this.props.data}
          columns={this.columns}
          rowEvents={this.rowEvents}
          noDataIndication='No data found'
          striped
          hover
        />
        <FormGroup row style={{ margin: 0 }}>
          <Col xs="auto" md="auto" xl="auto">
            <Label htmlFor="pageNumber"><small>Page Number</small></Label>
            <Input
              type="select"
              id="pageNumber"
              testid="testid-pageNumber"
              value={this.props.pageNumber}
              onChange={(e) => this.props.changePage('page', e.target.value)}>
              {this.pages}
            </Input>
          </Col>
        </FormGroup>
      </div>
    )
  }
}

export default MovieList
