import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'

class MovieDetail extends Component {

  addFav = (imdbID) => {
    let favs = JSON.parse(window.localStorage.getItem('favs'))
    let added = favs.push(imdbID)
    window.localStorage.setItem('favs', JSON.stringify(added))
  }

  delFav = (imdbID) => {
    let favs = JSON.parse(window.localStorage.getItem('favs'))
    let filtered = favs.filter(elem => elem.imdbID !== imdbID)
    window.localStorage.setItem('favs', JSON.stringify(filtered))
  }

  render() {
    const { movie } = this.props
    let favs = JSON.parse(window.localStorage.getItem('favs'))
    console.log(favs)
    const isFav = favs.find(elem => elem === movie.imdbID)
    return (
      <Card>
        <CardImg top width="300px" src={movie.Poster} alt="Card image cap" />
        <CardBody>
          <CardTitle>{movie.Title} - {movie.Year}</CardTitle>
          <CardText>Plot: {movie.Plot}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          {isFav ?
            (<Button onClick={this.delFav(movie.imdbID)}>Unmark as favorite</Button>) :
            (<Button onClick={this.addFav(movie.imdbID)}>Mark as favorite</Button>)
          }
        </CardBody>
      </Card>
    );
  }
}

export default MovieDetail;