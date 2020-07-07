import React, { Component } from "react";
import MovieForm from '../MovieForm/MovieForm'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import { getService } from 'shared/utils/services'

const PAGESIZE = 10

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: { s: '', type: '', y: '', page: 1 },
      movies: [],
      movie: null,
      isFav: false
    }
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this)
  }

  searchMovies() {
    let filter = { apikey: process.env.REACT_APP_APIKEY, ...this.state.formData }
    return getService('getMovies', filter)
  }

  getMovie(imdbID) {
    let filter = { apikey: process.env.REACT_APP_APIKEY, i: imdbID }
    return getService('getMovies', filter)
  }

  handleOnChangeFilter = (field, value) => {
    let formData = this.state.formData
    formData[field] = value
    if (field !== 'page') {
      formData.page = 1
    }
    this.setState({ formData }, () => this.handleOnSearch())
  }

  handleOnSearch = () => {
    this.searchMovies()
      .then(response => {
        if (response.Response === 'True') {
          this.setState({ movies: response.Search, totalPages: Math.ceil(response.totalResults / PAGESIZE) })
        } else {
          this.setState({ movies: [] })
        }
      })
  }

  handleOnClickClear = () => {
    this.setState({ formData: { s: '', type: '', y: '', page: 1 }, movies: [] })
  }

  handleOnSelectMovie = (imdbID) => {
    this.getMovie(imdbID)
      .then(response => {
        if (response.Response === 'True') {
          let imdbID = response.imdbID
          let favs = JSON.parse(window.localStorage.getItem('favs'))
          let isFav = favs.find(elem => elem === imdbID) ? true : false
          this.setState({ movie: response, isFav })
        } else {
          //TODO
        }
      })
  }

  addFav = () => {
    let imdbID = this.state.movie.imdbID
    let favs = JSON.parse(window.localStorage.getItem('favs'))
    favs.push(imdbID)
    window.localStorage.setItem('favs', JSON.stringify(favs))
    this.setState({ isFav: true })
  }

  delFav = () => {
    let imdbID = this.state.movie.imdbID
    let favs = JSON.parse(window.localStorage.getItem('favs'))
    let filtered = favs.filter(elem => elem !== imdbID)
    window.localStorage.setItem('favs', JSON.stringify(filtered))
    this.setState({ isFav: false })
  }

  render() {
    return (
      <div>
        <MovieForm
          formData={this.state.formData}
          onChangeFilter={this.handleOnChangeFilter}
          onClickClear={this.handleOnClickClear}
        ></MovieForm>
        <MovieList
          data={this.state.movies}
          totalPages={this.state.totalPages}
          pageNumber={this.state.formData.page}
          changePage={this.handleOnChangeFilter}
          onClickMovie={this.handleOnSelectMovie}
        ></MovieList>
        {(this.state.movie) ?
          (<MovieDetail
            movie={this.state.movie}
            isFav={this.state.isFav}
            addFav={this.addFav}
            delFav={this.delFav}>
          </MovieDetail>) :
          (<></>)}

      </div>
    );
  }
}

export default MovieSearch;