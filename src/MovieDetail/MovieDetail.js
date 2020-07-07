import React, { Component } from "react";
import { Card, CardImg, CardBody, CardHeader, CardText, Button } from 'reactstrap'

class MovieDetail extends Component {

  render() {
    const { movie } = this.props
    return (
      <Card className='App-card'>
        <CardHeader>
          <h3>{movie.Title}</h3>
          {this.props.isFav ? (<span className="Movie-favorite">MARKED AS FAVORITE</span>) : (<></>)}
        </CardHeader>
        <CardBody>
          <CardImg className='Movie-poster' top src={movie.Poster} alt="No image available" />
          <CardText><strong>Year:</strong><small>{movie.Year}</small></CardText>
          <CardText><strong>Plot:</strong><small>{movie.Plot}</small></CardText>
          <CardText><strong>Runtime:</strong><small>{movie.Runtime}</small></CardText>
          <CardText><strong>Directed by:</strong><small>{movie.Director}</small></CardText>
          <CardText><strong>Actors:</strong><small>{movie.Actors}</small></CardText>
          <CardText><strong>Language:</strong><small>{movie.Language}</small></CardText>
          <CardText><strong>Country:</strong><small>{movie.Country}</small></CardText>
          {this.props.isFav ?
            (<Button outline color='secondary' onClick={() => this.props.delFav()}>Unmark as favorite</Button>) :
            (<Button outline color='primary' onClick={() => this.props.addFav()}>Mark as favorite</Button>)
          }
        </CardBody>
      </Card>
    );
  }
}

export default MovieDetail;