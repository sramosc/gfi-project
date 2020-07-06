import React, { Component } from "react";
import MovieForm from '../MovieForm/MovieForm'

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: { s: '', type: '', y: '' }
    }
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this)
  }

  handleOnChangeFilter = (field, value) => {
    let formData = this.state.formData
    formData[field] = value
    this.setState({ formData })
  }

  handleOnClickSubmit = () => {

  }

  handleOnClickClear = () => {
    this.setState({ formData: { s: '', type: '', y: '' } })
  }

  render() {
    return (
      <div>
        <h3>Movies Search</h3>
        <MovieForm
          formData={this.state.formData}
          onChangeFilter={this.handleOnChangeFilter}
          onClickSubmit={this.handleOnClickSubmit}
          onClickClear={this.handleOnClickClear}
        ></MovieForm>
      </div>
    );
  }
}

export default MovieSearch;